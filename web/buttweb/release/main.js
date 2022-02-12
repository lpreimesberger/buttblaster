(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lpreimesberger/PycharmProjects/buttblaster/web/buttweb/src/main.ts */"zUnb");


/***/ }),

/***/ "8GGP":
/*!****************************************!*\
  !*** ./src/app/buttupdater.service.ts ***!
  \****************************************/
/*! exports provided: ButtupdaterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtupdaterService", function() { return ButtupdaterService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ButtupdaterService {
    constructor() {
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.buttSnap$ = this.message.asObservable();
        //  public host = 'http://192.168.86.20:5000';
        this.host = '/api';
        this.barebutt = this.host + '/buttsnap';
        this.butt = this.host + '/buttsnap';
        setInterval(this.butter.bind(this), 50000);
    }
    // tslint:disable-next-line:typedef
    butter() {
        //    this.butt = this.barebutt + '?cache=' + Math.random();
        //   this.message.next(this.butt);
    }
    buttsnap() {
        console.log('butt snap');
        return true;
    }
}
ButtupdaterService.ɵfac = function ButtupdaterService_Factory(t) { return new (t || ButtupdaterService)(); };
ButtupdaterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ButtupdaterService, factory: ButtupdaterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9uYD":
/*!*******************************!*\
  !*** ./src/assets/verbs.json ***!
  \*******************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[\"Accelerate\",\"Accommodate\",\"Accomplish\",\"Accumulate\",\"Achieve\",\"Acquire\",\"Act\",\"Activate\",\"Adapt\",\"Add\",\"Address\",\"Adjust\",\"Administer\",\"Advertise\",\"Advise\",\"Advocate\",\"Aid\",\"Aide\",\"Align\",\"Allocate\",\"Amend\",\"Analyze\",\"Answer\",\"Anticipate\",\"Apply\",\"Appoint\",\"Appraise\",\"Approve\",\"Arbitrate\",\"Arrange\",\"Articulate\",\"Ascertain\",\"Assemble\",\"Assess\",\"Assign\",\"Assist\",\"Assume\",\"Attain\",\"Attend\",\"Attract\",\"Audit\",\"Augment\",\"Author\",\"Authorize\",\"Automate\",\"Avert\",\"Award\",\"Bargain\",\"Begin\",\"Bolster\",\"Boost\",\"Bought\",\"Brief\",\"Broaden\",\"Budget\",\"Build\",\"Built\",\"Calculate\",\"Calibrate\",\"Canvass\",\"Capture\",\"Care\",\"Catalog\",\"Catalogue\",\"Categorize\",\"Cater\",\"Cause\",\"Centralize\",\"Chair\",\"Charge\",\"Chart\",\"Check\",\"Check in\",\"Check out\",\"Clarify\",\"Classify\",\"Co-operate\",\"Coach\",\"Code\",\"Collaborate\",\"Collate\",\"Collect\",\"Combine\",\"Comfort\",\"Commence\",\"Communicate\",\"Compare\",\"Compile\",\"Complete\",\"Compose\",\"Compute\",\"Conceive\",\"Conceptualize\",\"Conciliate\",\"Conclude\",\"Condense\",\"Conduct\",\"Confer\",\"Confirm\",\"Connect\",\"Conserve\",\"Consider\",\"Consolidate\",\"Construct\",\"Consult\",\"Contact\",\"Contract\",\"Contribute\",\"Control\",\"Convert\",\"Convey\",\"Convince\",\"Cooperate\",\"Coordinate\",\"Copy\",\"Correct\",\"Correlate\",\"Correspond\",\"Counsel\",\"Create\",\"Critique\",\"Cultivate\",\"Customize\",\"Dealt with\",\"Debate\",\"Debug\",\"Decide\",\"Decrease\",\"Dedicate\",\"Deduce\",\"Defend\",\"Defer\",\"Define\",\"Delegate\",\"Deliver\",\"Demonstrate\",\"Depict\",\"Depreciated\",\"Derive\",\"Describe\",\"Design\",\"Detail\",\"Detect\",\"Determine\",\"Develop\",\"Devise\",\"Devote\",\"Diagnose\",\"Diagram\",\"Differentiate\",\"Direct\",\"Discharge\",\"Disclose\",\"Discover\",\"Discriminate\",\"Discuss\",\"Dispatch\",\"Display\",\"Dissect\",\"Disseminate\",\"Distinguish\",\"Distribute\",\"Diversify\",\"Document\",\"Draft\",\"Draw\",\"Drew\",\"Earn\",\"Edit\",\"Educate\",\"Effect\",\"Elect\",\"Elicit\",\"Eliminate\",\"Emphasize\",\"Employ\",\"Enable\",\"Encourage\",\"Enforce\",\"Engineer\",\"Enhance\",\"Enlarge\",\"Enlighten\",\"Enlist\",\"Enrich\",\"Ensure\",\"Enter\",\"Entertain\",\"Enumerate\",\"Equip\",\"Establish\",\"Estimate\",\"Evaluate\",\"Examine\",\"Exchange\",\"Execute\",\"Exercise\",\"Exhibit\",\"Expand\",\"Expedite\",\"Experiment\",\"Explain\",\"Explore\",\"Express\",\"Extend\",\"Extract\",\"Extrapolate\",\"Fabricate\",\"Facilitate\",\"Familiarize\",\"Fashion\",\"File\",\"Filter\",\"Finalize\",\"Fine-tune\",\"Fix\",\"Focus\",\"Forecast\",\"Formulate\",\"Fortify\",\"Forward\",\"Foster\",\"Found\",\"Frame\",\"Fund\",\"Furnish\",\"Further\",\"Gather\",\"Gauge\",\"Generate\",\"Govern\",\"Grade\",\"Grant\",\"Greet\",\"Guide\",\"Handle\",\"Head\",\"Help\",\"Highlight\",\"Hire\",\"Host\",\"Identify\",\"Illustrate\",\"Impart\",\"Implement\",\"Import\",\"Improve\",\"Improvise\",\"Incorporate\",\"Increase\",\"Index\",\"Individualize\",\"Influence\",\"Inform\",\"Initiate\",\"Innovate\",\"Inspect\",\"Inspire\",\"Install\",\"Institute\",\"Instruct\",\"Insure\",\"Integrate\",\"Interact\",\"Interface\",\"Interpret\",\"Intervene\",\"Interview\",\"Introduce\",\"Invent\",\"Inventory\",\"Investigate\",\"Involve\",\"Join\",\"Judge\",\"Justify\",\"Label\",\"Launch\",\"Lead\",\"Learn\",\"Lecture\",\"License\",\"Lighten\",\"Liquidate\",\"List\",\"Listen\",\"Litigate\",\"Lobby\",\"Localize\",\"Locate\",\"Log\",\"Maintain\",\"Manage\",\"Manufacture\",\"Map\",\"Market\",\"Master\",\"Maximize\",\"Measure\",\"Mechanize\",\"Mediate\",\"Mentor\",\"Merge\",\"Methodize\",\"Minimize\",\"Mobilize\",\"Model\",\"Moderate\",\"Modernize\",\"Modify\",\"Monitor\",\"Motivate\",\"Narrate\",\"Navigate\",\"Negotiate\",\"Notify\",\"Nurse\",\"Nurture\",\"Observe\",\"Obtain\",\"Officiate\",\"Offset\",\"Operate\",\"Orchestrate\",\"Order\",\"Organize\",\"Orient\",\"Orientate\",\"Originate\",\"Outline\",\"Overhaul\",\"Oversaw\",\"Oversee\",\"Package\",\"Participate\",\"Perceive\",\"Perfect\",\"Perform\",\"Persuade\",\"Photograph\",\"Pilot\",\"Pioneer\",\"Plan\",\"Practice\",\"Predict\",\"Prepare\",\"Present\",\"Preserve\",\"Preside\",\"Prevent\",\"Print\",\"Prioritize\",\"Probe\",\"Process\",\"Produce\",\"Program\",\"Project\",\"Promote\",\"Propose\",\"Provide\",\"Publicize\",\"Publish\",\"Purchase\",\"Qualify\",\"Quantify\",\"Quote\",\"Raise\",\"Ran\",\"Rank\",\"Rate\",\"Read\",\"Reason\",\"Recall\",\"Recognize\",\"Recommend\",\"Reconcile\",\"Record\",\"Recreate\",\"Recruit\",\"Rectify\",\"Reduce\",\"Refer\",\"Refine\",\"Register\",\"Regulate\",\"Rehabilitate\",\"Reinforce\",\"Relate\",\"Related\",\"Release\",\"Remodel\",\"Render\",\"Renew\",\"Reorganize\",\"Repair\",\"Replace\",\"Report\",\"Represent\",\"Research\",\"Reserve\",\"Resolve\",\"Respond\",\"Restore\",\"Restrict\",\"Retain\",\"Retrieve\",\"Revamp\",\"Reveal\",\"Review\",\"Revise\",\"Revitalize\",\"Route\",\"Sample\",\"Save\",\"Scan\",\"Schedule\",\"Screen\",\"Script\",\"Scrutinize\",\"Search\",\"Secure\",\"Segment\",\"Select\",\"Serve\",\"Service\",\"Set goals\",\"Set up\",\"Settle\",\"Shape\",\"Share\",\"Show\",\"Simplify\",\"Simulate\",\"Sketch\",\"Sold\",\"Solicit\",\"Solve\",\"Sort\",\"Speak\",\"Spearhead\",\"Specialize\",\"Specify\",\"Spoke\",\"Stage\",\"Standardize\",\"Start\",\"Stimulate\",\"Straighten\",\"Strategize\",\"Streamline\",\"Strengthen\",\"Structure\",\"Study\",\"Submit\",\"Substantiate\",\"Substitute\",\"Suggest\",\"Summarize\",\"Supervise\",\"Supply\",\"Support\",\"Surpass\",\"Survey\",\"Sustain\",\"Symbolize\",\"Synthesize\",\"Systematize\",\"Tabulate\",\"Tail\",\"Target\",\"Taught\",\"Teach\",\"Tend\",\"Terminate\",\"Test\",\"Theorize\",\"Time\",\"Tour\",\"Trace\",\"Track\",\"Trade\",\"Train\",\"Transcribe\",\"Transfer\",\"Transform\",\"Translate\",\"Transmit\",\"Transport\",\"Transpose\",\"Travel\",\"Treat\",\"Triple\",\"Troubleshot\",\"Tutor\",\"Uncover\",\"Undertook\",\"Unify\",\"Unveil\",\"Update\",\"Upgrade\",\"Upheld\",\"Use\",\"Utilize\",\"Validate\",\"Value\",\"Verify\",\"View\",\"Visit\",\"Visualize\",\"Vitalize\",\"Volunteer\",\"Weigh\",\"Widen\",\"Win\",\"Withdraw\",\"Witness\",\"Write\",\"Xerox\",\"Zap\",\"Zero in\",\"Zip\",\"Zoom in\",\"Zoom out\",\"Zone off\"]}");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BhNG":
/*!**************************************!*\
  !*** ./src/app/svg/svg.component.ts ***!
  \**************************************/
/*! exports provided: SvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgComponent", function() { return SvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SvgComponent {
    constructor() {
        this.fillColor = 'rgb(255, 0, 0)';
    }
}
SvgComponent.ɵfac = function SvgComponent_Factory(t) { return new (t || SvgComponent)(); };
SvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgComponent, selectors: [["app-svg"]], decls: 14, vars: 0, consts: [["id", "svg1", "viewBox", "0 0 393.31 393.31"], ["id", "defs3"], ["id", "linearGradient1697"], ["id", "stop1698", "offset", "0", 2, "stop-color", "#db210e"], ["id", "stop1699", "offset", "1", 2, "stop-color", "#761107"], ["id", "linearGradient1076", "y2", "466.28", 0, "xlink", "href", "#linearGradient1697", "gradientUnits", "userSpaceOnUse", "x2", "520.57", "y1", "506.29", "x1", "520.57"], ["id", "linearGradient1077", "y2", "505.08", 0, "xlink", "href", "#linearGradient1697", "gradientUnits", "userSpaceOnUse", "x2", "522.94", "y1", "469.5", "x1", "522.94"], ["id", "linearGradient1078", "y2", "463.47", "gradientUnits", "userSpaceOnUse", "y1", "183.48", "gradientTransform", "matrix(1.5539 0 0 .64354 -1.0179 0)", "x2", "214.59", "x1", "213.83"], ["id", "stop1703", "offset", "0", 2, "stop-color", "#ffffff", "stop-opacity", ".69072"], ["id", "stop1704", "offset", "1", 2, "stop-color", "#ffffff", "stop-opacity", "0"], ["id", "layer1", "transform", "translate(-6.3422 -6.7204)"], ["id", "path1070", "d", "m544.07 487.06c0 11.479-9.3052 20.784-20.784 20.784s-20.784-9.3052-20.784-20.784 9.3052-20.784 20.784-20.784 20.784 9.3052 20.784 20.784z", "transform", "matrix(9.1612,0,0,9.1612,-4590.9,-4258.7)", 2, "stroke-linejoin", "round", "stroke", "url(#linearGradient1077)", "stroke-width", "1.3645", "stroke-linecap", "round", "fill", "url(#linearGradient1076)"], ["id", "path1713", "d", "m471.57 246.89c44.37-0.97-12.4-123.16-135.68-123.81-134.56-0.68-162.09 110.96-140.72 113 0 0 36.87 5.06 71.94 14.86 56.47 15.93 125.55-13.07 152.77-17.29 30.34-4.69 47.37 15.4 51.69 13.24z", "transform", "translate(-130.29,-93.649)", 2, "opacity", ".9", "fill-rule", "evenodd", "fill", "url(#linearGradient1078)"], ["id", "metadata16"]], template: function SvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "linearGradient", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "linearGradient", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "linearGradient", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "metadata", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Zy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzdmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "OBIn":
/*!*****************************!*\
  !*** ./src/assets/fun.json ***!
  \*****************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[\"Boobies\",\"Yif parties\",\"goat farming\",\"cat cruncher\",\"porta potty decorations\",\"goat sperm\",\"Hunting ground\",\"Lettuce\",\"Kitty\",\"Friendly grandma\",\"French chef\",\"Antidepressant drug\",\"Corn cake\",\"The president of the night\",\"Candlestick maker\",\"Coffee pot\",\"Brethren\",\"National security agency\",\"Tank\",\"Useless brakes\",\"International law enforcement agency\",\"Sound barrier\",\"Skinny woman\",\"Private investor\",\"Main people\",\"Stock car\",\"Elastic band\",\"Whole blood\",\"Telephone\",\"Mad cow disease\",\"Scourge upon the earth\",\"Rough-skinned newt\",\"Karate\",\"Pistol\",\"Legal warrant\",\"People who are hurt\",\"Idea he suggested\",\"Party of the first part\",\"Place of business\",\"Double fault\",\"Kitty cat\",\"Famous landscape painting\",\"Hairy legs\",\"Old irish cottage\",\"Pocket flask\",\"Liquid oxygen\",\"Laser beams\",\"Preventive strike\",\"Dingle berry\",\"Reading party\",\"Generalized bond\",\"Indirect expression\",\"Messiness\",\"Love of her life\",\"Trust fund\",\"Volcanic crater\",\"Travel guidebook\",\"Electric furnace\",\"Internal respiration\",\"Police squad\",\"Mad-dog skullcap\",\"Sneaky criminal\",\"New version\",\"Keepsake machete\",\"Gaming laptop\",\"Hissy fit\",\"Dog poop\",\"Dragon\",\"Mediation\",\"Patrolman\",\"Pervert\",\"Toilet seat\",\"Haunted graveyard\",\"Really tough guy\",\"Twinkling uncleanness\",\"Wrinkle\",\"Personal credit line\",\"Multi-billionaire\",\"Mental disorder\",\"Sweet tailpipe\",\"Boiling water\",\"Deer antler\",\"Background story\",\"Mood\",\"Nibblets\",\"Striped hyena\",\"Weed wacker\",\"Man of my dreams\",\"Pilot chart\",\"Suckling pig\",\"Sight of the girl\",\"Idiot\",\"Wiley coyote\",\"Crime scene\",\"Most beautiful girl\",\"Gothic romance\",\"First born\",\"Tire iron\",\"Planetary house\",\"Lieutenant governor\",\"Manure\",\"Rocket science\",\"Ways of the world\",\"Wild, wild sheep\",\"Kind and gentle folk\",\"Ice cream\",\"Diplomatic negotiation\",\"Marshmallow\",\"Internal control\",\"Totem pole\",\"Remnant of chaos\",\"Space emulator\",\"Serious question\",\"General knowledge\",\"Pile of decomposition\",\"Change for good\",\"Ship’s captain\",\"Hiking boots\",\"Lips\",\"Big polar bear\",\"Erie canal\",\"Sphere of influence\",\"Temper tantrum\",\"Elegant question\",\"Nature trail\",\"Indestructible empire\",\"Dentist’s drill\",\"Eskimo\",\"Indiscriminate killer\",\"Monkey\",\"Stick figure\",\"Day before\",\"Matrimonial law\",\"Sealed off tomb\",\"Unit of unholy depth\",\"Broken promises\",\"Notion of love\",\"Obviousness\",\"Fluffy clouds\",\"Shoe string\",\"Body\",\"Stir stick\",\"People\",\"Divergent thinking\",\"Latest version\",\"Baptist church\",\"Dirty coffee cup\",\"Towelette\",\"Amish folk\",\"Pillow\",\"Roadblock\",\"Disorder\",\"Big jerk\",\"Toilet\",\"Snakehead\",\"Descending color\",\"Merry bells\",\"Knight’s service\",\"Life raft\",\"Radio beam\",\"Brainchild\",\"Orbital plane\",\"Confusing situation\",\"Manipulating ass\",\"Microwaved eggs\",\"Shivering toes\",\"Natural history\",\"Positive feedback\",\"Modern times\",\"Mistress\",\"Animal psychology department\",\"Sewing-machine operator\",\"Light bulb\",\"Jet ski\",\"Constant reminder\",\"Baby\",\"Snake\",\"Mathematics department\",\"Video game\",\"Musical chairs\",\"Pancake\",\"Skull and crossbones\",\"Fluffy slippers\",\"Nonbeliever\",\"Phonograph record\",\"Friendly claim\",\"Willow\",\"Bouncy balls\",\"Tentacle\",\"Police department\",\"Bored child\",\"Thunder legs\",\"Abnormal behavior\",\"Control account\",\"Mimicker\",\"Overlord\",\"Informal request\",\"Railroad worm\",\"Nudist camp\",\"Mental case\",\"Date of improvement\",\"Sheep dip\",\"Toast\",\"Polkadot\",\"Pizza cutter\",\"Locker room\",\"Litter pan\",\"Wiener\",\"Extremity\",\"Invisibility cloak\",\"Biology lab\",\"Fairy lantern\"]}");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "NZy3");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _assets_adjectives_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/adjectives.json */ "qCH8");
var _assets_adjectives_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/adjectives.json */ "qCH8", 1);
/* harmony import */ var _assets_verbs_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/verbs.json */ "9uYD");
var _assets_verbs_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/verbs.json */ "9uYD", 1);
/* harmony import */ var _assets_fun_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/fun.json */ "OBIn");
var _assets_fun_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/fun.json */ "OBIn", 1);
/* harmony import */ var _assets_action_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/action.json */ "iKsn");
var _assets_action_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/action.json */ "iKsn", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _buttupdater_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttupdater.service */ "8GGP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-webcam */ "QKVY");




// @ts-ignore













function AppComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Generally - don't accept the offer of random weirdos to take you to the Buttblaster ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " By clicking through you agree you are over 18 to be allowed access. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_span_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.agree(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Nerd! - let me into the Butt Blaster");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { width: a0, height: "300px", space: 4 }; };
function AppComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ng-image-slider", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("imageClick", function AppComponent_span_6_Template_ng_image_slider_imageClick_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.pokeButt($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Click to like a butt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_span_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.load(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Get New Butts");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_span_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); ctx_r10.rankMode = false; return ctx_r10.snapMode = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Switch back to Buttblaster mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("manageImageRatio", true)("autoSlide", true)("imagePopup", false)("images", ctx_r1.imageObject)("imageSize", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r1.width));
} }
function AppComponent_span_7_webcam_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "webcam", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("imageCapture", function AppComponent_span_7_webcam_5_Template_webcam_imageCapture_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r12.handleImage($event); })("cameraSwitched", function AppComponent_span_7_webcam_5_Template_webcam_cameraSwitched_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r14.cameraWasSwitched($event); })("initError", function AppComponent_span_7_webcam_5_Template_webcam_initError_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r15.handleInitError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", ctx_r11.width * 0.75)("trigger", ctx_r11.triggerObservable)("allowCameraSwitch", ctx_r11.allowCameraSwitch)("switchCamera", ctx_r11.nextWebcamObservable)("videoOptions", ctx_r11.videoOptions)("imageQuality", 1);
} }
function AppComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Want to be judged? Upload your butt to the Internet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AppComponent_span_7_webcam_5_Template, 1, 6, "webcam", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Want to be judged? Upload your butt to the Internet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Your Playa Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " About you: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_span_7_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r16.cycle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Randomize Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_span_7_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r18.triggerSnapshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Grab My Butt!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_span_7_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); ctx_r19.snapMode = false; return ctx_r19.rankMode = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "No way - show me butts");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.showWebcam);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r2.bio);
} }
function AppComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_span_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20.sendButt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Send My Butt!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_span_9_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); ctx_r22.rankMode = ctx_r22.confirmMode = false; return ctx_r22.snapMode = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Redo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r3.theButt, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("width", ctx_r3.width * 0.75);
} }
class AppComponent {
    constructor(bu, cd, client, snackBar) {
        this.bu = bu;
        this.cd = cd;
        this.client = client;
        this.snackBar = snackBar;
        this.title = 'buttweb';
        this.keypressed = 12;
        this.theButt = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA' +
            'AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO' +
            '9TXL0Y4OHwAAAABJRU5ErkJggg==';
        ///
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.deviceId = '';
        this.snapMode = false;
        this.confirmMode = false;
        this.disclaimer = true;
        this.rankMode = false;
        this.width = 1000;
        this.height = 1000;
        this.imageObject = [];
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // surpress error
        this.name = '';
        this.bio = '';
        // @ts-ignore
        this.webcamImage = null;
        this.hasCamera = false;
        this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        this.cycle();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    handleKeyboardEvent(event) {
        this.keypressed = event.keyCode;
        console.log(this.keypressed);
        if (this.keypressed === 82) {
            this.cycle();
        }
        if (this.keypressed === 83) {
            this.red();
        }
    }
    makeName(x) {
        return x.charAt(0).toUpperCase() + x.slice(1);
    }
    // tslint:disable-next-line:typedef
    cycle() {
        this.name = lodash__WEBPACK_IMPORTED_MODULE_2__["sample"](_assets_adjectives_json__WEBPACK_IMPORTED_MODULE_4__["data"]) + ' ' + faker__WEBPACK_IMPORTED_MODULE_1__["name"].firstName();
        this.bio = lodash__WEBPACK_IMPORTED_MODULE_2__["sample"](_assets_action_json__WEBPACK_IMPORTED_MODULE_7__["data"]) + ' ' + lodash__WEBPACK_IMPORTED_MODULE_2__["sample"](_assets_verbs_json__WEBPACK_IMPORTED_MODULE_5__["data"]) + ' ' + lodash__WEBPACK_IMPORTED_MODULE_2__["sample"](_assets_fun_json__WEBPACK_IMPORTED_MODULE_6__["data"]);
        this.bio = this.bio.toLowerCase();
        this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        this.snackBar.open('New user data', 'more', { duration: 2000 });
    }
    // handle phone flips
    onResize(event) {
        console.log('handling resizing');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    ngOnInit() {
        this.load();
    }
    red() {
        const thisSnap = document.getElementById('butt');
        console.log(thisSnap);
        new Audio('/assets/click.mp3').play();
        const data = { name: this.name, bio: this.bio, uuid: this.uuid };
        this.client.post(this.bu.host + '/addbutt/' + this.uuid, data).toPromise().then((cats) => {
            console.log(cats);
            this.snackBar.open('Butt snapped', 'more', { duration: 2000 });
        }).catch((theError) => {
            this.snackBar.open('An error occurred', 'more', { duration: 2000 });
        }).finally(() => {
            this.cycle();
        });
    }
    load() {
        console.log('loading butts');
        this.client.get(this.bu.host + '/butts').toPromise().then((raw) => {
            const cats = raw;
            // clean the butts
            this.imageObject = [];
            // @ts-ignore
            for (const x in cats.data) {
                const record = cats.data[x];
                if (record.butt.length < 5) {
                    continue;
                }
                this.imageObject.push({
                    image: record.butt,
                    thumbImage: record.butt,
                    likes: record.likes,
                    _id: record._id,
                    name: record.name,
                    title: record.name + ' ' + record.likes + ' ♥',
                    alt: 'Image alt',
                });
            }
        }).catch((theError) => {
            this.snackBar.open('An error occurred', 'more', { duration: 2000 });
        }).finally(() => {
        });
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    handleInitError(error) {
        console.log('Failed to access the web cam?');
        console.log(error);
        this.errors.push(error);
    }
    handleImage(webcamImage) {
        // tslint:disable-next-line:no-console
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
        const x = webcamImage.imageAsDataUrl;
        this.theButt = x;
        this.confirmMode = true;
        this.rankMode = this.snapMode = false;
        new Audio('/assets/click.mp3').play();
    }
    cameraWasSwitched(deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    sendButt() {
        const data = { name: this.name, bio: this.bio, uuid: this.uuid, butt: this.theButt };
        this.client.post(this.bu.host + '/sendbutt/' + this.uuid, data).toPromise().then((cats) => {
            console.log(cats);
            this.snackBar.open('Butt snapped', 'more', { duration: 2000 });
        }).catch((theError) => {
            this.snackBar.open('An error occurred', 'more', { duration: 2000 });
        }).finally(() => {
            this.snapMode = this.confirmMode = false;
            this.rankMode = true;
            this.load();
        });
    }
    pokeButt(index) {
        console.log(index);
        const butt = this.imageObject[index];
        console.log(butt);
        // @ts-ignore
        this.client.put(this.bu.host + '/ratebutt/' + butt._id + '/5').toPromise().then((raw) => {
            // @ts-ignore
            this.imageObject[index].likes += 1;
            // @ts-ignore
            this.imageObject[index].title = this.imageObject[index].name + ' ' + this.imageObject[index].likes + ' ♥';
        });
    }
    agree() {
        this.disclaimer = false;
        this.snapMode = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_buttupdater_service__WEBPACK_IMPORTED_MODULE_9__["ButtupdaterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"])("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    } }, decls: 17, vars: 4, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "assets/peach.svg"], [1, "spacer"], ["id", "disclaimer", "style", "align-content: center; margin-top: 5%", 4, "ngIf"], ["id", "rank", "style", "margin-top: 10%; text-align: center;", 4, "ngIf"], ["id", "snap", "style", "text-align: center; margin-top: 7%; margin-left: 5%; margin-right: 5%", 4, "ngIf"], ["role", "main", 1, "content"], ["id", "confirm", 4, "ngIf"], ["id", "click2", "src", "assets/click.mp3"], [2, "font-family", "Consolas, monospace", "align-content", "center", "text-align", "center", "font-size", "xx-small", "margin-left", "5%", "margin-right", "5%"], ["id", "disclaimer", 2, "align-content", "center", "margin-top", "5%"], [2, "max-height", "5%", "min-height", "5%"], ["src", "assets/peach.svg", "width", "50px", 2, "margin-left", "10%", "margin-top", "15%"], [2, "color", "#24292e", "margin-top", "5%", "margin-left", "10%", "margin-right", "10%", "font-size", "large"], ["mat-raised-button", "", "color", "accent", 2, "color", "#24292e", "margin-top", "3%", "margin-left", "20%", "margin-right", "10%", 3, "click"], ["id", "rank", 2, "margin-top", "10%", "text-align", "center"], [3, "manageImageRatio", "autoSlide", "imagePopup", "images", "imageSize", "imageClick"], ["nav", ""], [2, "align-content", "center", "margin-top", "fill"], ["mat-raised-button", "", "color", "warn", 3, "click"], [2, "align-content", "center", "margin-top", "5%"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["id", "snap", 2, "text-align", "center", "margin-top", "7%", "margin-left", "5%", "margin-right", "5%"], ["id", "basic", 2, "text-align", "center"], [3, "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageQuality", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], [2, "text-align", "center", "margin-top", "2%", "margin-left", "5%", "margin-right", "1%"], ["type", "text", "size", "50", "width", "500", "multiple", "", 1, "form-control", 3, "value"], ["type", "text", "size", "50", 1, "form-control", 2, "word-break", "break-word", 3, "value"], [2, "align-content", "center"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "text-align", "center", "margin-top", "2%", "margin-left", "5%", 3, "click"], ["mat-raised-button", "", "color", "default", 3, "click"], [3, "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageQuality", "imageCapture", "cameraSwitched", "initError"], ["id", "confirm"], ["alt", "Red dot", 3, "src", "width"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Butt Blaster 20220210");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AppComponent_span_5_Template, 10, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AppComponent_span_6_Template, 14, 7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_span_7_Template, 25, 3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AppComponent_span_9_Template, 12, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "audio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Copyleft 2021-2022 \u00A9 Pussy Avalanche. You may not make commercial use of any images or content on this site. Fuck your burn. :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Don't share the butts of others without asking :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.disclaimer);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.rankMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.snapMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.confirmMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], ng_image_slider__WEBPACK_IMPORTED_MODULE_15__["NgImageSliderComponent"], ngx_webcam__WEBPACK_IMPORTED_MODULE_16__["WebcamComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\n\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: rgb(105, 103, 103);\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\n\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: rgb(15, 15, 16);\n}\n\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\\2022 \\2022 \\2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: rgb(58, 58, 58);\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27,31,35,.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n}\n\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n  border-color: rgba(27,31,35,.35);\n  background-position: -.5em;\n}\n\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\n\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n\n\n@media screen and (max-width: 767px) {\n\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n  mat-grid-tile[_ngcontent-%COMP%] {\n    background: lightgray;\n  }\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n\n.bigred[_ngcontent-%COMP%] {\n  color: red;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!-- Created with Inkscape (http://www.inkscape.org/) --%3E%3Csvg xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:cc='http://creativecommons.org/ns%23' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:dc='http://purl.org/dc/elements/1.1/' id='svg1' sodipodi:docname='_svgclean2.svg' viewBox='0 0 393.31 393.31' sodipodi:version='0.32' version='1.1' inkscape:version='0.48.3.1 r9886' %3E%3Cdefs id='defs3' %3E%3ClinearGradient id='linearGradient1697' %3E%3Cstop id='stop1698' style='stop-color:%23db210e' offset='0' /%3E%3Cstop id='stop1699' style='stop-color:%23761107' offset='1' /%3E%3C/linearGradient %3E%3ClinearGradient id='linearGradient1076' y2='466.28' xlink:href='%23linearGradient1697' gradientUnits='userSpaceOnUse' x2='520.57' y1='506.29' x1='520.57' inkscape:collect='always' /%3E%3ClinearGradient id='linearGradient1077' y2='505.08' xlink:href='%23linearGradient1697' gradientUnits='userSpaceOnUse' x2='522.94' y1='469.5' x1='522.94' inkscape:collect='always' /%3E%3ClinearGradient id='linearGradient1078' y2='463.47' gradientUnits='userSpaceOnUse' y1='183.48' gradientTransform='matrix(1.5539 0 0 .64354 -1.0179 0)' x2='214.59' x1='213.83' inkscape:collect='always' %3E%3Cstop id='stop1703' style='stop-color:%23ffffff;stop-opacity:.69072' offset='0' /%3E%3Cstop id='stop1704' style='stop-color:%23ffffff;stop-opacity:0' offset='1' /%3E%3C/linearGradient %3E%3C/defs %3E%3Csodipodi:namedview id='base' bordercolor='%23666666' inkscape:pageshadow='2' inkscape:window-y='0' pagecolor='%23ffffff' inkscape:window-maximized='0' inkscape:window-width='674' inkscape:zoom='0.43415836' inkscape:window-x='0' showgrid='false' borderopacity='1.0' inkscape:current-layer='layer1' inkscape:cx='353.7649' inkscape:cy='-556.68757' inkscape:window-height='645' inkscape:pageopacity='0.0' /%3E%3Cg id='layer1' inkscape:label='Layer 1' inkscape:groupmode='layer' transform='translate(-6.3422 -6.7204)' %3E%3Cpath id='path1070' sodipodi:rx='20.783747' sodipodi:ry='20.783747' style='stroke-linejoin:round;stroke:url(%23linearGradient1077);stroke-width:1.3645;stroke-linecap:round;fill:url(%23linearGradient1076)' sodipodi:type='arc' d='m544.07 487.06c0 11.479-9.3052 20.784-20.784 20.784s-20.784-9.3052-20.784-20.784 9.3052-20.784 20.784-20.784 20.784 9.3052 20.784 20.784z' transform='matrix(9.1612,0,0,9.1612,-4590.9,-4258.7)' sodipodi:cy='487.06226' sodipodi:cx='523.28259' /%3E%3Cpath id='path1713' style='opacity:.9;fill-rule:evenodd;fill:url(%23linearGradient1078)' d='m471.57 246.89c44.37-0.97-12.4-123.16-135.68-123.81-134.56-0.68-162.09 110.96-140.72 113 0 0 36.87 5.06 71.94 14.86 56.47 15.93 125.55-13.07 152.77-17.29 30.34-4.69 47.37 15.4 51.69 13.24z' sodipodi:nodetypes='cccccc' inkscape:connector-curvature='0' transform='translate(-130.29,-93.649)' /%3E%3C/g %3E%3Cmetadata id='metadata16' %3E%3Crdf:RDF %3E%3Ccc:Work %3E%3Cdc:format %3Eimage/svg+xml%3C/dc:format %3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Ccc:license rdf:resource='http://creativecommons.org/licenses/publicdomain/' /%3E%3Cdc:publisher %3E%3Ccc:Agent rdf:about='http://openclipart.org/' %3E%3Cdc:title %3EOpenclipart%3C/dc:title %3E%3C/cc:Agent %3E%3C/dc:publisher %3E%3C/cc:Work %3E%3Ccc:License rdf:about='http://creativecommons.org/licenses/publicdomain/' %3E%3Ccc:permits rdf:resource='http://creativecommons.org/ns%23Reproduction' /%3E%3Ccc:permits rdf:resource='http://creativecommons.org/ns%23Distribution' /%3E%3Ccc:permits rdf:resource='http://creativecommons.org/ns%23DerivativeWorks' /%3E%3C/cc:License %3E%3C/rdf:RDF %3E%3C/metadata %3E%3C/svg%0A%3E%0A\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEpBQTBKO0VBQzFKLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7Ozs7OztFQU1FLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrSUFBa0k7QUFDcEk7O0FBRUE7RUFDRSw4REFBOEQ7RUFDOUQsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFHQSxzQkFBc0I7O0FBQ3RCOztFQUVFOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjtBQUNGOztBQUlBO0VBQ0UsVUFBVTtFQUNWLHl4SEFBeXhIO0FBQzN4SCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi50b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi50b29sYmFyICN5b3V0dWJlLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyLFxuLnRvb2xiYXIgI3lvdXR1YmUtbG9nbzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzg4ODtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTY4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbn1cblxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5zdmcjcm9ja2V0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogLTI0cHg7XG59XG5cbnN2ZyNyb2NrZXQtc21va2Uge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaXJjbGUtbGluayB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuZm9vdGVyIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuc3ZnI2Nsb3VkcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTYwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbiAgei1pbmRleDogLTEwO1xuICB3aWR0aDogMTkyMHB4O1xufVxuXG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAudGVybWluYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG4gIG1hdC1ncmlkLXRpbGUge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgfVxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cblxuXG5cbi5iaWdyZWQge1xuICBjb2xvcjogcmVkO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDJTNGeG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyclM0YlM0UlM0MhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tJTNFJTNDc3ZnIHhtbG5zOmlua3NjYXBlPSdodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlJyB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyUyMycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczpzb2RpcG9kaT0naHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQnIHhtbG5zOmNjPSdodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyUyMycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLycgaWQ9J3N2ZzEnIHNvZGlwb2RpOmRvY25hbWU9J19zdmdjbGVhbjIuc3ZnJyB2aWV3Qm94PScwIDAgMzkzLjMxIDM5My4zMScgc29kaXBvZGk6dmVyc2lvbj0nMC4zMicgdmVyc2lvbj0nMS4xJyBpbmtzY2FwZTp2ZXJzaW9uPScwLjQ4LjMuMSByOTg4NicgJTNFJTNDZGVmcyBpZD0nZGVmczMnICUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdsaW5lYXJHcmFkaWVudDE2OTcnICUzRSUzQ3N0b3AgaWQ9J3N0b3AxNjk4JyBzdHlsZT0nc3RvcC1jb2xvcjolMjNkYjIxMGUnIG9mZnNldD0nMCcgLyUzRSUzQ3N0b3AgaWQ9J3N0b3AxNjk5JyBzdHlsZT0nc3RvcC1jb2xvcjolMjM3NjExMDcnIG9mZnNldD0nMScgLyUzRSUzQy9saW5lYXJHcmFkaWVudCAlM0UlM0NsaW5lYXJHcmFkaWVudCBpZD0nbGluZWFyR3JhZGllbnQxMDc2JyB5Mj0nNDY2LjI4JyB4bGluazpocmVmPSclMjNsaW5lYXJHcmFkaWVudDE2OTcnIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyB4Mj0nNTIwLjU3JyB5MT0nNTA2LjI5JyB4MT0nNTIwLjU3JyBpbmtzY2FwZTpjb2xsZWN0PSdhbHdheXMnIC8lM0UlM0NsaW5lYXJHcmFkaWVudCBpZD0nbGluZWFyR3JhZGllbnQxMDc3JyB5Mj0nNTA1LjA4JyB4bGluazpocmVmPSclMjNsaW5lYXJHcmFkaWVudDE2OTcnIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyB4Mj0nNTIyLjk0JyB5MT0nNDY5LjUnIHgxPSc1MjIuOTQnIGlua3NjYXBlOmNvbGxlY3Q9J2Fsd2F5cycgLyUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdsaW5lYXJHcmFkaWVudDEwNzgnIHkyPSc0NjMuNDcnIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyB5MT0nMTgzLjQ4JyBncmFkaWVudFRyYW5zZm9ybT0nbWF0cml4KDEuNTUzOSAwIDAgLjY0MzU0IC0xLjAxNzkgMCknIHgyPScyMTQuNTknIHgxPScyMTMuODMnIGlua3NjYXBlOmNvbGxlY3Q9J2Fsd2F5cycgJTNFJTNDc3RvcCBpZD0nc3RvcDE3MDMnIHN0eWxlPSdzdG9wLWNvbG9yOiUyM2ZmZmZmZjtzdG9wLW9wYWNpdHk6LjY5MDcyJyBvZmZzZXQ9JzAnIC8lM0UlM0NzdG9wIGlkPSdzdG9wMTcwNCcgc3R5bGU9J3N0b3AtY29sb3I6JTIzZmZmZmZmO3N0b3Atb3BhY2l0eTowJyBvZmZzZXQ9JzEnIC8lM0UlM0MvbGluZWFyR3JhZGllbnQgJTNFJTNDL2RlZnMgJTNFJTNDc29kaXBvZGk6bmFtZWR2aWV3IGlkPSdiYXNlJyBib3JkZXJjb2xvcj0nJTIzNjY2NjY2JyBpbmtzY2FwZTpwYWdlc2hhZG93PScyJyBpbmtzY2FwZTp3aW5kb3cteT0nMCcgcGFnZWNvbG9yPSclMjNmZmZmZmYnIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9JzAnIGlua3NjYXBlOndpbmRvdy13aWR0aD0nNjc0JyBpbmtzY2FwZTp6b29tPScwLjQzNDE1ODM2JyBpbmtzY2FwZTp3aW5kb3cteD0nMCcgc2hvd2dyaWQ9J2ZhbHNlJyBib3JkZXJvcGFjaXR5PScxLjAnIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9J2xheWVyMScgaW5rc2NhcGU6Y3g9JzM1My43NjQ5JyBpbmtzY2FwZTpjeT0nLTU1Ni42ODc1NycgaW5rc2NhcGU6d2luZG93LWhlaWdodD0nNjQ1JyBpbmtzY2FwZTpwYWdlb3BhY2l0eT0nMC4wJyAvJTNFJTNDZyBpZD0nbGF5ZXIxJyBpbmtzY2FwZTpsYWJlbD0nTGF5ZXIgMScgaW5rc2NhcGU6Z3JvdXBtb2RlPSdsYXllcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTYuMzQyMiAtNi43MjA0KScgJTNFJTNDcGF0aCBpZD0ncGF0aDEwNzAnIHNvZGlwb2RpOnJ4PScyMC43ODM3NDcnIHNvZGlwb2RpOnJ5PScyMC43ODM3NDcnIHN0eWxlPSdzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOnVybCglMjNsaW5lYXJHcmFkaWVudDEwNzcpO3N0cm9rZS13aWR0aDoxLjM2NDU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7ZmlsbDp1cmwoJTIzbGluZWFyR3JhZGllbnQxMDc2KScgc29kaXBvZGk6dHlwZT0nYXJjJyBkPSdtNTQ0LjA3IDQ4Ny4wNmMwIDExLjQ3OS05LjMwNTIgMjAuNzg0LTIwLjc4NCAyMC43ODRzLTIwLjc4NC05LjMwNTItMjAuNzg0LTIwLjc4NCA5LjMwNTItMjAuNzg0IDIwLjc4NC0yMC43ODQgMjAuNzg0IDkuMzA1MiAyMC43ODQgMjAuNzg0eicgdHJhbnNmb3JtPSdtYXRyaXgoOS4xNjEyLDAsMCw5LjE2MTIsLTQ1OTAuOSwtNDI1OC43KScgc29kaXBvZGk6Y3k9JzQ4Ny4wNjIyNicgc29kaXBvZGk6Y3g9JzUyMy4yODI1OScgLyUzRSUzQ3BhdGggaWQ9J3BhdGgxNzEzJyBzdHlsZT0nb3BhY2l0eTouOTtmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCglMjNsaW5lYXJHcmFkaWVudDEwNzgpJyBkPSdtNDcxLjU3IDI0Ni44OWM0NC4zNy0wLjk3LTEyLjQtMTIzLjE2LTEzNS42OC0xMjMuODEtMTM0LjU2LTAuNjgtMTYyLjA5IDExMC45Ni0xNDAuNzIgMTEzIDAgMCAzNi44NyA1LjA2IDcxLjk0IDE0Ljg2IDU2LjQ3IDE1LjkzIDEyNS41NS0xMy4wNyAxNTIuNzctMTcuMjkgMzAuMzQtNC42OSA0Ny4zNyAxNS40IDUxLjY5IDEzLjI0eicgc29kaXBvZGk6bm9kZXR5cGVzPSdjY2NjY2MnIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9JzAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMzAuMjksLTkzLjY0OSknIC8lM0UlM0MvZyAlM0UlM0NtZXRhZGF0YSBpZD0nbWV0YWRhdGExNicgJTNFJTNDcmRmOlJERiAlM0UlM0NjYzpXb3JrICUzRSUzQ2RjOmZvcm1hdCAlM0VpbWFnZS9zdmcreG1sJTNDL2RjOmZvcm1hdCAlM0UlM0NkYzp0eXBlIHJkZjpyZXNvdXJjZT0naHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UnIC8lM0UlM0NjYzpsaWNlbnNlIHJkZjpyZXNvdXJjZT0naHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvcHVibGljZG9tYWluLycgLyUzRSUzQ2RjOnB1Ymxpc2hlciAlM0UlM0NjYzpBZ2VudCByZGY6YWJvdXQ9J2h0dHA6Ly9vcGVuY2xpcGFydC5vcmcvJyAlM0UlM0NkYzp0aXRsZSAlM0VPcGVuY2xpcGFydCUzQy9kYzp0aXRsZSAlM0UlM0MvY2M6QWdlbnQgJTNFJTNDL2RjOnB1Ymxpc2hlciAlM0UlM0MvY2M6V29yayAlM0UlM0NjYzpMaWNlbnNlIHJkZjphYm91dD0naHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvcHVibGljZG9tYWluLycgJTNFJTNDY2M6cGVybWl0cyByZGY6cmVzb3VyY2U9J2h0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zJTIzUmVwcm9kdWN0aW9uJyAvJTNFJTNDY2M6cGVybWl0cyByZGY6cmVzb3VyY2U9J2h0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zJTIzRGlzdHJpYnV0aW9uJyAvJTNFJTNDY2M6cGVybWl0cyByZGY6cmVzb3VyY2U9J2h0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zJTIzRGVyaXZhdGl2ZVdvcmtzJyAvJTNFJTNDL2NjOkxpY2Vuc2UgJTNFJTNDL3JkZjpSREYgJTNFJTNDL21ldGFkYXRhICUzRSUzQy9zdmclMEElM0UlMEFcIik7XG59XG4iXX0= */", ""] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _buttupdater_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttupdater.service */ "8GGP");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _svg_svg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg/svg.component */ "BhNG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        _buttupdater_service__WEBPACK_IMPORTED_MODULE_5__["ButtupdaterService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRCodeModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_14__["WebcamModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_15__["NgImageSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _svg_svg_component__WEBPACK_IMPORTED_MODULE_12__["SvgComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRCodeModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_14__["WebcamModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_15__["NgImageSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "iKsn":
/*!********************************!*\
  !*** ./src/assets/action.json ***!
  \********************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[\"Loves to\",\"Enchanted by opportunity to\",\"Roiled when sees someone\",\"Proponent to\",\"Enraptured by\",\"Always entranced by\",\"Loves to\",\"Enthusiastic supporter of those who\",\"Violent agitator to\",\"Keen punter to\"]}");

/***/ }),

/***/ "qCH8":
/*!************************************!*\
  !*** ./src/assets/adjectives.json ***!
  \************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[\"Stinky\",\"Cockblocker\",\"Luminous,\",\"Candy\",\"Toothless\",\"Constipated,\",\"Cherry\",\"Jelly\",\"Crusty\",\"Sugar\",\"Loud\",\"Ice\",\"Granola\",\"Abandoned\",\"Able\",\"Absolute\",\"Adorable\",\"Adventurous\",\"Academic\",\"Acceptable\",\"Acclaimed\",\"Accomplished\",\"Accurate\",\"Aching\",\"Acidic\",\"Acrobatic\",\"Active\",\"Actual\",\"Adept\",\"Admirable\",\"Admired\",\"Adolescent\",\"Adorable\",\"Adored\",\"Advanced\",\"Afraid\",\"Affectionate\",\"Aged\",\"Aggravating\",\"Aggressive\",\"Agile\",\"Agitated\",\"Agonizing\",\"Agreeable\",\"Ajar\",\"Alarmed\",\"Alarming\",\"Alert\",\"All\",\"Altruistic\",\"Amazing\",\"Ambitious\",\"Ample\",\"Amused\",\"Amusing\",\"Anchored\",\"Ancient\",\"Angelic\",\"Angry\",\"Anguished\",\"Animated\",\"Annual\",\"Another\",\"Antique\",\"Anxious\",\"Any\",\"Apprehensive\",\"Appropriate\",\"Apt\",\"Arctic\",\"Arid\",\"Aromatic\",\"Artistic\",\"Ashamed\",\"Assured\",\"Astonishing\",\"Athletic\",\"Attached\",\"Attentive\",\"Attractive\",\"Austere\",\"Authentic\",\"Authorized\",\"Automatic\",\"Avaricious\",\"Average\",\"Aware\",\"Awesome\",\"Awful\",\"Awkward\",\"Babyish\",\"Bad\",\"Back\",\"Baggy\",\"Bare\",\"Barren\",\"Basic\",\"Beautiful\",\"Belated\",\"Beloved\",\"Beneficial\",\"Better\",\"Best\",\"Bewitched\",\"Big\",\"Big-hearted\",\"Biodegradable\",\"Bite-sized\",\"Bitter\",\"Bland\",\"Blank\",\"Blaring\",\"Bleak\",\"Blind\",\"Blissful\",\"Blond\",\"Blue\",\"Blushing\",\"Bogus\",\"Boiling\",\"Bold\",\"Bony\",\"Boring\",\"Bossy\",\"Both\",\"Bouncy\",\"Bountiful\",\"Bowed\",\"Brave\",\"Breakable\",\"Brief\",\"Bright\",\"Brilliant\",\"Brisk\",\"Broken\",\"Bronze\",\"Brown\",\"Bruised\",\"Bubbly\",\"Bulky\",\"Bumpy\",\"Buoyant\",\"Burdensome\",\"Burly\",\"Bustling\",\"Busy\",\"Buttery\",\"Buzzing\",\"Calculating\",\"Calm\",\"Candid\",\"Canine\",\"Capital\",\"Carefree\",\"Careful\",\"Careless\",\"Caring\",\"Cautious\",\"Cavernous\",\"Celebrated\",\"Charming\",\"Cheap\",\"Cheerful\",\"Cheery\",\"Chief\",\"Chilly\",\"Chubby\",\"Circular\",\"Classic\",\"Clean\",\"Clear\",\"Clear-cut\",\"Clever\",\"Close\",\"Closed\",\"Cloudy\",\"Clueless\",\"Clumsy\",\"Cluttered\",\"Coarse\",\"Cold\",\"Colorful\",\"Colorless\",\"Colossal\",\"Comfortable\",\"Common\",\"Compassionate\",\"Competent\",\"Complete\",\"Complex\",\"Complicated\",\"Composed\",\"Concerned\",\"Concrete\",\"Confused\",\"Conscious\",\"Considerate\",\"Constant\",\"Content\",\"Conventional\",\"Cooked\",\"Cool\",\"Cooperative\",\"Coordinated\",\"Corny\",\"Corrupt\",\"Costly\",\"Courageous\",\"Courteous\",\"Crafty\",\"Crazy\",\"Creamy\",\"Creative\",\"Creepy\",\"Criminal\",\"Crisp\",\"Critical\",\"Crooked\",\"Crowded\",\"Cruel\",\"Crushing\",\"Cuddly\",\"Cultivated\",\"Cultured\",\"Cumbersome\",\"Curly\",\"Curvy\",\"Cute\",\"Cylindrical\",\"Damaged\",\"Damp\",\"Dangerous\",\"Dapper\",\"Daring\",\"Darling\",\"Dark\",\"Dazzling\",\"Dead\",\"Deadly\",\"Deafening\",\"Dear\",\"Dearest\",\"Decent\",\"Decimal\",\"Decisive\",\"Deep\",\"Defenseless\",\"Defensive\",\"Defiant\",\"Deficient\",\"Definite\",\"Definitive\",\"Delayed\",\"Delectable\",\"Delicious\",\"Delightful\",\"Delirious\",\"Demanding\",\"Dense\",\"Dental\",\"Dependable\",\"Dependent\",\"Descriptive\",\"Deserted\",\"Detailed\",\"Determined\",\"Devoted\",\"Different\",\"Difficult\",\"Digital\",\"Diligent\",\"Dim\",\"Dimpled\",\"Dimwitted\",\"Direct\",\"Disastrous\",\"Discrete\",\"Disfigured\",\"Disgusting\",\"Disloyal\",\"Dismal\",\"Distant\",\"Downright\",\"Dreary\",\"Dirty\",\"Disguised\",\"Dishonest\",\"Dismal\",\"Distant\",\"Distinct\",\"Distorted\",\"Dizzy\",\"Dopey\",\"Doting\",\"Double\",\"Downright\",\"Drab\",\"Drafty\",\"Dramatic\",\"Dreary\",\"Droopy\",\"Dry\",\"Dual\",\"Dull\",\"Dutiful\",\"Each\",\"Eager\",\"Earnest\",\"Early\",\"Easy\",\"Easy-going\",\"Ecstatic\",\"Edible\",\"Educated\",\"Elaborate\",\"Elastic\",\"Elated\",\"Elderly\",\"Electric\",\"Elegant\",\"Elementary\",\"Elliptical\",\"Embarrassed\",\"Embellished\",\"Eminent\",\"Emotional\",\"Empty\",\"Enchanted\",\"Enchanting\",\"Energetic\",\"Enlightened\",\"Enormous\",\"Enraged\",\"Entire\",\"Envious\",\"Equal\",\"Equatorial\",\"Essential\",\"Esteemed\",\"Ethical\",\"Euphoric\",\"Even\",\"Evergreen\",\"Everlasting\",\"Every\",\"Evil\",\"Exalted\",\"Excellent\",\"Exemplary\",\"Exhausted\",\"Excitable\",\"Excited\",\"Exciting\",\"Exotic\",\"Expensive\",\"Experienced\",\"Expert\",\"Extraneous\",\"Extroverted\",\"Extra-large\",\"Extra-small\",\"Fabulous\",\"Failing\",\"Faint\",\"Fair\",\"Faithful\",\"Fake\",\"False\",\"Familiar\",\"Famous\",\"Fancy\",\"Fantastic\",\"Far\",\"Faraway\",\"Far-flung\",\"Far-off\",\"Fast\",\"Fat\",\"Fatal\",\"Fatherly\",\"Favorable\",\"Favorite\",\"Fearful\",\"Fearless\",\"Feisty\",\"Feline\",\"Female\",\"Feminine\",\"Few\",\"Fickle\",\"Filthy\",\"Fine\",\"Finished\",\"Firm\",\"First\",\"Firsthand\",\"Fitting\",\"Fixed\",\"Flaky\",\"Flamboyant\",\"Flashy\",\"Flat\",\"Flawed\",\"Flawless\",\"Flickering\",\"Flimsy\",\"Flippant\",\"Flowery\",\"Fluffy\",\"Fluid\",\"Flustered\",\"Focused\",\"Fond\",\"Foolhardy\",\"Foolish\",\"Forceful\",\"Forked\",\"Formal\",\"Forsaken\",\"Forthright\",\"Fortunate\",\"Fragrant\",\"Frail\",\"Frank\",\"Frayed\",\"Free\",\"French\",\"Fresh\",\"Frequent\",\"Friendly\",\"Frightened\",\"Frightening\",\"Frigid\",\"Frilly\",\"Frizzy\",\"Frivolous\",\"Front\",\"Frosty\",\"Frozen\",\"Frugal\",\"Fruitful\",\"Full\",\"Fumbling\",\"Functional\",\"Funny\",\"Fussy\",\"Fuzzy\",\"Gargantuan\",\"Gaseous\",\"General\",\"Generous\",\"Gentle\",\"Genuine\",\"Giant\",\"Giddy\",\"Gigantic\",\"Gifted\",\"Giving\",\"Glamorous\",\"Glaring\",\"Glass\",\"Gleaming\",\"Gleeful\",\"Glistening\",\"Glittering\",\"Gloomy\",\"Glorious\",\"Glossy\",\"Glum\",\"Golden\",\"Good\",\"Good-natured\",\"Gorgeous\",\"Graceful\",\"Gracious\",\"Grand\",\"Grandiose\",\"Granular\",\"Grateful\",\"Grave\",\"Gray\",\"Great\",\"Greedy\",\"Green\",\"Gregarious\",\"Grim\",\"Grimy\",\"Gripping\",\"Grizzled\",\"Gross\",\"Grotesque\",\"Grouchy\",\"Grounded\",\"Growing\",\"Growling\",\"Grown\",\"Grubby\",\"Gruesome\",\"Grumpy\",\"Guilty\",\"Gullible\",\"Gummy\",\"Hairy\",\"Half\",\"Handmade\",\"Handsome\",\"Handy\",\"Happy\",\"Happy-go-lucky\",\"Hard\",\"Hard-to-find\",\"Harmful\",\"Harmless\",\"Harmonious\",\"Harsh\",\"Hasty\",\"Hateful\",\"Haunting\",\"Healthy\",\"Heartfelt\",\"Hearty\",\"Heavenly\",\"Heavy\",\"Hefty\",\"Helpful\",\"Helpless\",\"Hidden\",\"Hideous\",\"High\",\"High-level\",\"Hilarious\",\"Hoarse\",\"Hollow\",\"Homely\",\"Honest\",\"Honorable\",\"Honored\",\"Hopeful\",\"Horrible\",\"Hospitable\",\"Hot\",\"Huge\",\"Humble\",\"Humiliating\",\"Humming\",\"Humongous\",\"Hungry\",\"Hurtful\",\"Husky\",\"Icky\",\"Icy\",\"Ideal\",\"Idealistic\",\"Identical\",\"Idle\",\"Idiotic\",\"Idolized\",\"Ignorant\",\"Ill\",\"Illegal\",\"Ill-fated\",\"Ill-informed\",\"Illiterate\",\"Illustrious\",\"Imaginary\",\"Imaginative\",\"Immaculate\",\"Immaterial\",\"Immediate\",\"Immense\",\"Impassioned\",\"Impeccable\",\"Imperturbable\",\"Impish\",\"Impolite\",\"Important\",\"Impossible\",\"Impractical\",\"Impressionable\",\"Impressive\",\"Improbable\",\"Impure\",\"Incomparable\",\"Incredible\",\"Indelible\",\"Inexperienced\",\"Indolent\",\"Infamous\",\"Infantile\",\"Infatuated\",\"Inferior\",\"Infinite\",\"Informal\",\"Innocent\",\"Insecure\",\"Insidious\",\"Insignificant\",\"Insistent\",\"Instructive\",\"Insubstantial\",\"Intelligent\",\"Intent\",\"Intentional\",\"Interesting\",\"Internal\",\"International\",\"Intrepid\",\"Ironclad\",\"Irresponsible\",\"Irritating\",\"Itchy\",\"Jaded\",\"Jagged\",\"Jam-packed\",\"Jaunty\",\"Jealous\",\"Jittery\",\"Joint\",\"Jolly\",\"Jovial\",\"Joyful\",\"Joyous\",\"Jubilant\",\"Judicious\",\"Juicy\",\"Jumbo\",\"Junior\",\"Jumpy\",\"Juvenile\",\"Kaleidoscopic\",\"Keen\",\"Key\",\"Kind\",\"Kindhearted\",\"Kindly\",\"Klutzy\",\"Knobby\",\"Knotty\",\"Knowledgeable\",\"Knowing\",\"Known\",\"Kooky\",\"Kosher\",\"Lame\",\"Lanky\",\"Large\",\"Last\",\"Lasting\",\"Late\",\"Lavish\",\"Lawful\",\"Lazy\",\"Leading\",\"Lean\",\"Leafy\",\"Left\",\"Legal\",\"Legitimate\",\"Light\",\"Lighthearted\",\"Likable\",\"Likely\",\"Limited\",\"Limp\",\"Limping\",\"Linear\",\"Lined\",\"Liquid\",\"Little\",\"Live\",\"Lively\",\"Livid\",\"Loathsome\",\"Lone\",\"Lonely\",\"Long\",\"Long-term\",\"Loose\",\"Lopsided\",\"Lost\",\"Loud\",\"Lovable\",\"Lovely\",\"Loving\",\"Low\",\"Loyal\",\"Lucky\",\"Lumbering\",\"Luminous\",\"Lumpy\",\"Lustrous\",\"Luxurious\",\"Mad\",\"Made-up\",\"Magnificent\",\"Majestic\",\"Major\",\"Male\",\"Mammoth\",\"Married\",\"Marvelous\",\"Masculine\",\"Massive\",\"Mature\",\"Meager\",\"Mealy\",\"Mean\",\"Measly\",\"Meaty\",\"Medical\",\"Mediocre\",\"Medium\",\"Meek\",\"Mellow\",\"Melodic\",\"Memorable\",\"Menacing\",\"Merry\",\"Messy\",\"Metallic\",\"Mild\",\"Milky\",\"Mindless\",\"Miniature\",\"Minor\",\"Minty\",\"Miserable\",\"Miserly\",\"Misguided\",\"Misty\",\"Mixed\",\"Modern\",\"Modest\",\"Moist\",\"Monstrous\",\"Monthly\",\"Monumental\",\"Moral\",\"Mortified\",\"Motherly\",\"Motionless\",\"Mountainous\",\"Muddy\",\"Muffled\",\"Multicolored\",\"Mundane\",\"Murky\",\"Mushy\",\"Musty\",\"Muted\",\"Mysterious\",\"Naive\",\"Narrow\",\"Nasty\",\"Natural\",\"Naughty\",\"Nautical\",\"Near\",\"Neat\",\"Necessary\",\"Needy\",\"Negative\",\"Neglected\",\"Negligible\",\"Neighboring\",\"Nervous\",\"New\",\"Next\",\"Nice\",\"Nifty\",\"Nimble\",\"Nippy\",\"Nocturnal\",\"Noisy\",\"Nonstop\",\"Normal\",\"Notable\",\"Noted\",\"Noteworthy\",\"Novel\",\"Noxious\",\"Numb\",\"Nutritious\",\"Nutty\",\"Obedient\",\"Obese\",\"Oblong\",\"Oily\",\"Oblong\",\"Obvious\",\"Occasional\",\"Odd\",\"Oddball\",\"Offbeat\",\"Offensive\",\"Official\",\"Old\",\"Old-fashioned\",\"Only\",\"Open\",\"Optimal\",\"Optimistic\",\"Opulent\",\"Orange\",\"Orderly\",\"Organic\",\"Ornate\",\"Ornery\",\"Ordinary\",\"Original\",\"Other\",\"Our\",\"Outlying\",\"Outgoing\",\"Outlandish\",\"Outrageous\",\"Outstanding\",\"Oval\",\"Overcooked\",\"Overdue\",\"Overjoyed\",\"Overlooked\",\"Palatable\",\"Pale\",\"Paltry\",\"Parallel\",\"Parched\",\"Partial\",\"Passionate\",\"Past\",\"Pastel\",\"Peaceful\",\"Peppery\",\"Perfect\",\"Perfumed\",\"Periodic\",\"Perky\",\"Personal\",\"Pertinent\",\"Pesky\",\"Physical\",\"Piercing\",\"Pink\",\"Pitiful\",\"Plain\",\"Plaintive\",\"Plastic\",\"Playful\",\"Pleasant\",\"Pleased\",\"Pleasing\",\"Plump\",\"Plush\",\"Polished\",\"Polite\",\"Political\",\"Pointed\",\"Pointless\",\"Poised\",\"Poor\",\"Popular\",\"Portly\",\"Posh\",\"Positive\",\"Possible\",\"Potable\",\"Powerful\",\"Powerless\",\"Practical\",\"Precious\",\"Present\",\"Prestigious\",\"Pretty\",\"Precious\",\"Previous\",\"Pricey\",\"Prickly\",\"Primary\",\"Prime\",\"Pristine\",\"Private\",\"Prize\",\"Probable\",\"Productive\",\"Profitable\",\"Profuse\",\"Proper\",\"Proud\",\"Prudent\",\"Punctual\",\"Pungent\",\"Puny\",\"Pure\",\"Purple\",\"Pushy\",\"Putrid\",\"Puzzled\",\"Puzzling\",\"Quaint\",\"Qualified\",\"Quarrelsome\",\"Quarterly\",\"Queasy\",\"Querulous\",\"Questionable\",\"Quick\",\"Quick-witted\",\"Quiet\",\"Quintessential\",\"Quirky\",\"Quixotic\",\"Quizzical\",\"Radiant\",\"Ragged\",\"Rapid\",\"Rare\",\"Rash\",\"Raw\",\"Recent\",\"Reckless\",\"Rectangular\",\"Ready\",\"Real\",\"Realistic\",\"Reasonable\",\"Red\",\"Reflecting\",\"Regal\",\"Regular\",\"Reliable\",\"Relieved\",\"Remarkable\",\"Remorseful\",\"Remote\",\"Repentant\",\"Required\",\"Respectful\",\"Responsible\",\"Repulsive\",\"Revolving\",\"Rewarding\",\"Rich\",\"Rigid\",\"Right\",\"Ringed\",\"Ripe\",\"Roasted\",\"Robust\",\"Rosy\",\"Rotating\",\"Rotten\",\"Rough\",\"Round\",\"Rowdy\",\"Royal\",\"Rubbery\",\"Rundown\",\"Ruddy\",\"Runny\",\"Salty\",\"Same\",\"Sandy\",\"Sane\",\"Sarcastic\",\"Sardonic\",\"Satisfied\",\"Scaly\",\"Scarce\",\"Scared\",\"Scary\",\"Scented\",\"Scholarly\",\"Scientific\",\"Scornful\",\"Scratchy\",\"Scrawny\",\"Second\",\"Secondary\",\"Second-hand\",\"Secret\",\"Self-assured\",\"Self-reliant\",\"Selfish\",\"Sentimental\",\"Separate\",\"Serene\",\"Serious\",\"Serpentine\",\"Several\",\"Severe\",\"Shabby\",\"Shadowy\",\"Shady\",\"Shallow\",\"Shameful\",\"Shameless\",\"Sharp\",\"Shimmering\",\"Shiny\",\"Shocked\",\"Shocking\",\"Shoddy\",\"Short\",\"Short-term\",\"Showy\",\"Shrill\",\"Shy\",\"Sick\",\"Silent\",\"Silky\",\"Silly\",\"Silver\",\"Similar\",\"Simple\",\"Simplistic\",\"Sinful\",\"Single\",\"Sizzling\",\"Skeletal\",\"Skinny\",\"Sleepy\",\"Slight\",\"Slim\",\"Slimy\",\"Slippery\",\"Slow\",\"Slushy\",\"Small\",\"Smart\",\"Smoggy\",\"Smooth\",\"Smug\",\"Snappy\",\"Snarling\",\"Sneaky\",\"Sniveling\",\"Snoopy\",\"Sociable\",\"Soft\",\"Soggy\",\"Solid\",\"Somber\",\"Some\",\"Spherical\",\"Sophisticated\",\"Sore\",\"Sorrowful\",\"Soulful\",\"Soupy\",\"Sour\",\"Sparkling\",\"Sparse\",\"Specific\",\"Spectacular\",\"Speedy\",\"Spicy\",\"Spiffy\",\"Spirited\",\"Spiteful\",\"Splendid\",\"Spotless\",\"Spotted\",\"Spry\",\"Square\",\"Squeaky\",\"Squiggly\",\"Stable\",\"Staid\",\"Stained\",\"Stale\",\"Standard\",\"Starchy\",\"Stark\",\"Starry\",\"Steep\",\"Sticky\",\"Stiff\",\"Stimulating\",\"Stingy\",\"Stormy\",\"Straight\",\"Strange\",\"Steel\",\"Strict\",\"Strident\",\"Striking\",\"Striped\",\"Strong\",\"Studious\",\"Stunning\",\"Stupendous\",\"Stupid\",\"Sturdy\",\"Stylish\",\"Subdued\",\"Submissive\",\"Substantial\",\"Subtle\",\"Suburban\",\"Sudden\",\"Sugary\",\"Sunny\",\"Super\",\"Superb\",\"Superficial\",\"Superior\",\"Supportive\",\"Sure-footed\",\"Surprised\",\"Suspicious\",\"Svelte\",\"Sweaty\",\"Sweet\",\"Sweltering\",\"Swift\",\"Sympathetic\",\"Tall\",\"Talkative\",\"Tame\",\"Tan\",\"Tangible\",\"Tart\",\"Tasty\",\"Tattered\",\"Taut\",\"Tedious\",\"Teeming\",\"Tempting\",\"Tender\",\"Tense\",\"Tepid\",\"Terrible\",\"Terrific\",\"Testy\",\"Thankful\",\"That\",\"These\",\"Thick\",\"Thin\",\"Third\",\"Thirsty\",\"This\",\"Thorough\",\"Thorny\",\"Those\",\"Thoughtful\",\"Threadbare\",\"Thrifty\",\"Thunderous\",\"Tidy\",\"Tight\",\"Timely\",\"Tinted\",\"Tiny\",\"Tired\",\"Torn\",\"Total\",\"Tough\",\"Traumatic\",\"Treasured\",\"Tremendous\",\"Tragic\",\"Trained\",\"Tremendous\",\"Triangular\",\"Tricky\",\"Trifling\",\"Trim\",\"Trivial\",\"Troubled\",\"True\",\"Trusting\",\"Trustworthy\",\"Trusty\",\"Truthful\",\"Tubby\",\"Turbulent\",\"Twin\",\"Ultimate\",\"Uncommon\",\"Unconscious\",\"Understated\",\"Unequaled\",\"Uneven\",\"Unfinished\",\"Unfit\",\"Unfolded\",\"Unfortunate\",\"Unhappy\",\"Unhealthy\",\"Uniform\",\"Unimportant\",\"Unique\",\"United\",\"Unkempt\",\"Unknown\",\"Unlawful\",\"Unlined\",\"Unnatural\",\"Unruly\",\"Unselfish\",\"Unsightly\",\"Unsteady\",\"Unsung\",\"Untidy\",\"Untimely\",\"Unused\",\"Unusual\",\"Unwieldy\",\"Unwitting\",\"Unwritten\",\"Upbeat\",\"Upright\",\"Usable\",\"Used\",\"Useful\",\"Utilized\",\"Utter\",\"Vacant\",\"Vague\",\"Valuable\",\"Variable\",\"Vast\",\"Velvety\",\"Venerated\",\"Vengeful\",\"Verifiable\",\"Vibrant\",\"Victorious\",\"Vigilant\",\"Vigorous\",\"Villainous\",\"Violet\",\"Violent\",\"Virtual\",\"Virtuous\",\"Visible\",\"Vital\",\"Vivacious\",\"Vivid\",\"Voluminous\",\"Wan\",\"Warlike\",\"Warm\",\"Warmhearted\",\"Warped\",\"Wary\",\"Wasteful\",\"Watchful\",\"Waterlogged\",\"Watery\",\"Wavy\",\"Webbed\",\"Wee\",\"Weekly\",\"Weepy\",\"Weighty\",\"Weird\",\"Welcome\",\"Well-groomed\",\"Well-informed\",\"Well-lit\",\"Well-made\",\"Wet\",\"Which\",\"Whimsical\",\"Whirlwind\",\"Whispered\",\"Whole\",\"Whopping\",\"Wicked\",\"Wide\",\"Wide-eyed\",\"Wiggly\",\"Wild\",\"Willing\",\"Wilted\",\"Winding\",\"Windy\",\"Winged\",\"Wiry\",\"Wise\",\"Witty\",\"Wobbly\",\"Woeful\",\"Wonderful\",\"Wooden\",\"Woozy\",\"Wordy\",\"Worldly\",\"Worn\",\"Worried\",\"Worrisome\",\"Worthy\",\"Wrathful\",\"Writhing\",\"Wry\",\"Yawning\",\"Yearly\",\"Yummy\",\"Zany\",\"Zealous\",\"Zesty\",\"Zigzag\",\"Chlamydia\",\"Selenoplexic\",\"Dipsomanic\",\"Amenomanic\",\"Cholera\",\"Hobnail\",\"Spleenful\",\"Slugabed\",\"Moist\"]}");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map