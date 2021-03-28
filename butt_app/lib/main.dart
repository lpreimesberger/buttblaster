import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import 'package:http/http.dart' as http;

var SERVER = '192.168.86.133:5000';

class TheButt {
  List<Data> data;
  TheButt({this.data});
  TheButt.fromJson(Map<String, dynamic> json) {
    if (json['data'] != null) {
      data = new List<Data>();
      json['data'].forEach((v) {
        data.add(new Data.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.data != null) {
      data['data'] = this.data.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Data {
  String sId;
  String sRev;
  String added;
  String bio;
  String name;

  Data({this.sId, this.sRev, this.added, this.bio, this.name});

  Data.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    sRev = json['_rev'];
    added = json['added'];
    bio = json['bio'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['_rev'] = this.sRev;
    data['added'] = this.added;
    data['bio'] = this.bio;
    data['name'] = this.name;
    return data;
  }
}


void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.amber,
      ),
      home: MyHomePage(title: 'Butt Blaster'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  Future<TheButt> futureButt;
  List<Data>  allButts = new List<Data>();
  int buttFinger = 0;
  String burner;
  String posted;
  String bio;
  String uid;
  String buttImage = "placeholder";

  Future<TheButt> fetchButts() async {
    final response = await http.get(Uri.http('192.168.86.133:5000', 'butts'));
    if (response.statusCode == 200) {
      print("GOT BUTTS");
      return TheButt.fromJson(jsonDecode(response.body));
    } else {
      print("NO BUTTS");
      throw Exception('Failed to load album');
    }
  }

  void buttLoad(int thisButt){
    setState(() {
      burner = allButts[thisButt].name;
      bio = allButts[thisButt].bio;
      posted = allButts[thisButt].added;
      uid = allButts[thisButt].sId;
      buttImage = 'http://' + SERVER + '/butt/' + uid + ".png";
    });
  }


  void buttExtendedParse(TheButt x){
    allButts.clear();
    buttFinger = 0;
    for( var record in x.data ){
      print(record);
      allButts.add(record);
    }
    buttLoad(buttFinger);
  }

  void buttParse(){
    futureButt.then((value) => buttExtendedParse(value));
  }
  
  @override
  void initState() {
    super.initState();
    futureButt = fetchButts();
    futureButt.whenComplete(() => { buttParse()}); 
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image.network(buttImage),
            Text(
              '$burner',
              style: Theme.of(context).textTheme.headline4,
            ),
            Text(
              '$bio',
            ),
        RatingBar.builder(
          initialRating: 3,
          itemCount: 5,
          itemBuilder: (context, index) {
            switch (index) {
              case 0:
                return Icon(
                  Icons.sentiment_very_dissatisfied,
                  color: Colors.red,
                );
              case 1:
                return Icon(
                  Icons.sentiment_dissatisfied,
                  color: Colors.redAccent,
                );
              case 2:
                return Icon(
                  Icons.sentiment_neutral,
                  color: Colors.amber,
                );
              case 3:
                return Icon(
                  Icons.sentiment_satisfied,
                  color: Colors.lightGreen,
                );
              case 4:
                return Icon(
                  Icons.sentiment_very_satisfied,
                  color: Colors.green,
                );
            }
          },
          onRatingUpdate: (rating) {
            print(rating);
          },
        )],
        ),
      ),
    );
  }
}
