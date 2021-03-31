import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import 'package:http/http.dart' as http;
import 'package:sprintf/sprintf.dart';

var serverAddress = '192.168.86.133:5000';

class TheButt {
  List<Data> data;

  TheButt({this.data});

  TheButt.fromJson(Map<String, dynamic> json) {
    if (json['data'] != null) {
      data = [];
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
  double rating;
  List<int> ratings;

  Data({this.sId, this.sRev, this.added, this.bio, this.name});

  Data.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    sRev = json['_rev'];
    added = json['added'];
    bio = json['bio'];
    name = json['name'];
    rating = json['rating'];
    ratings = json['ratings'];
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
  Future<TheButt> futureButt;
  List<Data> allButts = [];
  int buttFinger = 0;
  String burner;
  String posted;
  String bio;
  String uid;
  double score = 3;
  int    votes = 0;
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

  double buttAverage(List<int> scores){
    int sum = 0;
    if( scores.length < 1) return 0;
    scores.forEach((element) { sum = sum + element;});
    return sum / scores.length;
  }
  
  Future<void> rateButt(int thisButt, int newScore) async {
    if(thisButt > allButts.length) return;
    var buttGuid =allButts[thisButt].sId;
    final response = await http.put(Uri.http('192.168.86.133:5000', 'ratebutt/$buttGuid/$newScore'));
    setState(() {
      if(allButts[thisButt].ratings == null) allButts[thisButt].ratings = [];
      allButts[thisButt].ratings.add(newScore);
      allButts[thisButt].rating = buttAverage(allButts[thisButt].ratings);
      score = allButts[thisButt].rating;
      votes = allButts[thisButt].ratings.length;
    });
  }

  void buttLoad(int thisButt) {
    setState(() {
      burner = allButts[thisButt].name;
      bio = allButts[thisButt].bio;
      posted = allButts[thisButt].added;
      uid = allButts[thisButt].sId;
      score = (allButts[thisButt].rating != null) ? allButts[thisButt].rating : 0;
      buttImage = 'http://' + serverAddress + '/butt/' + uid + ".png";
      votes = (allButts[thisButt].ratings != null) ? allButts[thisButt].ratings.length : 0;
    });
  }

  void buttExtendedParse(TheButt x) {
    allButts.clear();
    buttFinger = 0;
    for (var record in x.data) {
      print(record);
      allButts.add(record);
    }
    buttLoad(buttFinger);
  }

  void buttParse() {
    futureButt.then((value) => buttExtendedParse(value));
  }

  @override
  void initState() {
    super.initState();
    futureButt = fetchButts();
    futureButt.whenComplete(() => {buttParse()});
  }

  Widget _buttFaces(){
    return RatingBar.builder(
        initialRating: 3,
        itemCount: 5,
        onRatingUpdate: (rating) {
          print(rating);
          rateButt(buttFinger, rating.toInt());
        },

        itemBuilder: (context, index) {
          switch (index) {
            case 0:
              return Icon(
                Icons.sentiment_very_dissatisfied,
                size: 60,
                color: Colors.red,
              );
            case 1:
              return Icon(
                Icons.sentiment_dissatisfied,
                size: 60,
                color: Colors.redAccent,
              );
            case 2:
              return Icon(
                Icons.sentiment_neutral,
                size: 60,
                color: Colors.amber,
              );
            case 3:
              return Icon(
                Icons.sentiment_satisfied,
                size: 60,
                color: Colors.lightGreen,
              );
            default:
              return Icon(
                Icons.sentiment_very_satisfied,
                size: 60,
                color: Colors.green,
              );
          }
        });
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
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            GestureDetector(
              onHorizontalDragEnd: (dragEndDetails) {
                if (dragEndDetails.primaryVelocity < 0) {
                  // Page forwards
                  print('Move page forwards');
                  _goForward();
                } else if (dragEndDetails.primaryVelocity > 0) {
                  // Page backwards
                  print('Move page backwards');
                  _goBack();
                }
              },
              child: Image.network(buttImage, height: 300,),
            )            ,
            Text(
              '$burner',
              style: Theme.of(context).textTheme.headline3,
            ),
            Text(
              '$bio',
              style: Theme.of(context).textTheme.bodyText2,
            ),
            Text(
              sprintf('Butt Rating %1.2f / %d votes', [score, votes]),
              style: Theme.of(context).textTheme.bodyText2,
            ),
            _buttFaces(),

        ],
        ),
      ),
    );
  }

  void _goForward() {
    if(buttFinger < allButts.length-1) {
      buttFinger = buttFinger + 1;
      buttLoad(buttFinger);
    }

  }

  void _goBack() {
    if(buttFinger > 0) {
      buttFinger = buttFinger - 1;
      buttLoad(buttFinger);
    }
  }
}
