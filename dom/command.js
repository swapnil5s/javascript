/*
document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class

document.getElementById('title').classname
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute(cla
VM192:1 Uncaught SyntaxError: missing ) after argument list
document.getElementById('title').getAttribute(class)
VM209:1 Uncaught SyntaxError: Unexpected token ')'
document.getElementById('title').getAttribute('class')
'heading'
const title = document.getElementById('title')
undefined
title
title.style.backgroundColor = 'green'
'green'
title.style.padding = "15px"
'15px'
title.style.borderRadius = "15px"
'15px'
title.innerHTML
'DOM learning <span style="display: none">Text test</span> '
title.textContent
document.querySelector('h1')
document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('#heading')
null
document.querySelector('.heading')
'DOM learning Text test '

document.querySelector('input[type="password"]')
<input type=​"password" name id>​
document.querySelector('p:first-child')
null
const tempLi= document.querySelectorAll('li')
undefined
tempLi
NodeList(3) [li, li, li]
tempLi[0].style.color = 'green'
'green'
tempLi.forEach(function(l) {
    l.style.backgroundColor='green'
})
document.getElementsByClassName('list1')
HTMLCollection(3) [li.list1, li.list1, li.list1]0: li.list11: li.list12: li.list1length: 3[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
const tempLo = document.getElementsByClassName('list1')
undefined
tem
VM1413:1 Uncaught ReferenceError: tem is not defined
    at <anonymous>:1:1
(anonymous) @ VM1413:1
tempLo
HTMLCollection(3) [li.list1, li.list1, li.list1]
Array.from(tempLo)
(3) [li.list1, li.list1, li.list1]0: li.list11: li.list12: li.list1length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
const myArr = Array.from(tempLo)
undefined
myArr
(3) [li.list1, li.list1, li.list1]
myArr.m
undefined
myArr.map((ni)=>(ni+"to")
          console.log(myArr)
VM1689:1 Uncaught SyntaxError: missing ) after argument list
myArr.map((ni)=>(ni+"to"))
          console.log(myArr)
          VM1693:2 (3) [li.list1, li.list1, li.list1]0: li.list1accessKey: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""autofocus: falsebaseURI: "file:///C:/Users/sswap/OneDrive/Documents/one.html"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList ['list1', value: 'list1']className: "list1"clientHeight: 18clientLeft: 0clientTop: 0clientWidth: 128contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: ""inert: falseinnerHTML: "one"innerText: "one"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "li"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: li.list1nextSibling: textnodeName: "LI"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 18offsetLeft: 48offsetParent: body.bg-blackoffsetTop: 374offsetWidth: 128onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<li class=\"list1\">one</li>"outerText: "one"ownerDocument: documentparentElement: ulparentNode: ulpart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: nullpreviousSibling: textrole: nullscrollHeight: 18scrollLeft: 0scrollTop: 0scrollWidth: 128shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "LI"textContent: "one"title: ""translate: truetype: ""value: 0virtualKeyboardPolicy: ""[[Prototype]]: HTMLLIElement(...)1: li.list12: li.list1length: 3[[Prototype]]: Array(0)
          undefined
          myArr.forEach(function(li) {
            li.style.color = 'orange'    
          })
document.querySelectorAll('h2')
NodeList(16) [h2.vector-pinnable-header-label, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2]
const h2 = document.querySelectorAll('h2')
undefined
h2[0].innerText
''
h2[1].innerText
'History'
document.querySelectorAll('.mw-headline')
NodeList(75) [span#History.mw-headline, span#Creation_at_Netscape.mw-headline, span#Adoption_by_Microsoft.mw-headline, span#The_rise_of_JScript.mw-headline, span#Growth_and_standardization.mw-headline, span#Reaching_maturity.mw-headline, span#Trademark.mw-headline, span#Website_client-side_usage.mw-headline, span#Examples_of_scripted_behavior.mw-headline, span#Web_libraries_and_frameworks.mw-headline, span#React.mw-headline, span#Angular.mw-headline, span#jQuery.mw-headline, span#Vanilla_JS.mw-headline, span#Other_usage.mw-headline, span#Execution_system.mw-headline, span#Just-in-time_compilation.mw-headline, span#JavaScript_engine.mw-headline, span#Run-time_environment.mw-headline, span#Examples.mw-headline, span#Node.js.mw-headline, span#Deno.mw-headline, span#Features.mw-headline, span#Imperative_and_structured.mw-headline, span#Weakly_typed.mw-headline, span#Dynamic.mw-headline, span#Typing.mw-headline, span#Run-time_evaluation.mw-headline, span#Object-orientation_(prototype-based).mw-headline, span#Prototypes.mw-headline, span#Functions_as_object_constructors.mw-headline, span#Functions_as_methods.mw-headline, span#Functional.mw-headline, span#Lexical_closure.mw-headline, span#Anonymous_function.mw-headline, span#Delegative.mw-headline, span#Functions_as_roles_(Traits_and_Mixins).mw-headline, span#Object_composition_and_inheritance.mw-headline, span#Miscellaneous.mw-headline, span#Zero-based_numbering.mw-headline, span#Variadic_functions.mw-headline, span#Array_and_object_literals.mw-headline, span#Regular_expressions.mw-headline, span#Promises_and_Async/await.mw-headline, span#Promises.mw-headline, span#Async/await.mw-headline, span#Vendor-specific_extensions.mw-headline, span#Syntax.mw-headline, span#Simple_examples.mw-headline, span#More_advanced_example.mw-headline, span#Security.mw-headline, span#Cross-site_vulnerabilities.mw-headline, span#Cross-site_scripting.mw-headline, span#Cross-site_request_forgery.mw-headline, span#Misplaced_trust_in_the_client.mw-headline, span#Misplaced_trust_in_developers.mw-headline, span#Browser_and_plugin_coding_errors.mw-headline, span#Sandbox_implementation_errors.mw-headline, span#Hardware_vulnerabilities.mw-headline, span#Development_tools.mw-headline, span#Static_program_analysis.mw-headline, span#ESLint.mw-headline, span#JSLint.mw-headline, span#Code_incompatibility.mw-headline, span#Related_technologies.mw-headline, span#Java.mw-headline, span#JSON.mw-headline, span#TypeScript.mw-headline, span#WebAssembly.mw-headline, span#Transpilers.mw-headline, span#Ajax.mw-headline, span#References.mw-headline, span#Sources.mw-headline, span#Further_reading.mw-headline, span#External_links.mw-headline]
const myH2 = document.querySelectorAll('.mw-headline')
undefined
myH2.forEach(function (h) {
    h.style.color= 'red';
    h.style.backgroundColor = 'green';
}
VM640:4 Uncaught SyntaxError: missing ) after argument list
myH2.forEach(function (h) {
    h.style.color= 'red';
    h.style.backgroundColor = 'green';
    h.style.padding='10px'
})
undefined
myH2.forEach(function (h) {
    h.style.color= 'red';
    h.style.backgroundColor = 'green';
    h.style.padding='10px';
    h.innerText = "swapnil"
})
*/
