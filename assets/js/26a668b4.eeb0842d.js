"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7479],{5429:(i,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(5893),a=r(1151);const s={sidebar_position:1},t="\u5e8f\u5217\u5316\u5b57\u5178",l={id:"unity/Unity-SerializableDictionary",title:"\u5e8f\u5217\u5316\u5b57\u5178",description:"A serializable dictionary class for Unity.",source:"@site/docs/unity/Unity-SerializableDictionary.md",sourceDirName:"unity",slug:"/unity/Unity-SerializableDictionary",permalink:"/docs/unity/Unity-SerializableDictionary",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity/Unity-SerializableDictionary.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NPM",permalink:"/docs/typescripts/npm"},next:{title:"Advanced Locomotion System V4",permalink:"/docs/unreal/alsv4"}},o={},c=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u7b80\u5355\u7684\u5b57\u5178\u6848\u4f8b",id:"\u7b80\u5355\u7684\u5b57\u5178\u6848\u4f8b",level:3},{value:"\u5e26\u6709\u5217\u8868\u7684\u5b57\u5178\u6848\u4f8b",id:"\u5e26\u6709\u5217\u8868\u7684\u5b57\u5178\u6848\u4f8b",level:3},{value:"\u7ec6\u8282",id:"\u7ec6\u8282",level:2},{value:"\u5305\u542b\u5217\u8868\u6216\u8005\u6570\u7ec4\u7684\u5b57\u5178",id:"\u5305\u542b\u5217\u8868\u6216\u8005\u6570\u7ec4\u7684\u5b57\u5178",level:3}];function d(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u5e8f\u5217\u5316\u5b57\u5178",children:"\u5e8f\u5217\u5316\u5b57\u5178"}),"\n",(0,n.jsx)(e.p,{children:"A serializable dictionary class for Unity."}),"\n",(0,n.jsx)(e.p,{children:"Unity cannot serialize standard dictionaries. This means that they won't show or be edited in the inspector\r\nand they won't be instantiated at startup. A classic workaround is to store the keys and values in separate arrays\r\nand construct the dictionary at startup."}),"\n",(0,n.jsx)(e.p,{children:"This project provides a generic dictionary class and its custom property drawer that solves this problem."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"General screenshot",src:r(2997).Z+"",width:"391",height:"152"})}),"\n",(0,n.jsx)(e.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["It inherits from ",(0,n.jsx)(e.code,{children:"Dictionary<TKey, TValue>"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["It implements a ",(0,n.jsx)(e.code,{children:"CopyFrom(IDictionary<TKey, TValue>)"})," method to help assign values from regular dictionaries"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"You can use any serializable type by unity as key or value."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"It can be edited in the inspector without having to implement custom editors or property drawers."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["The inspector will handle invalid dictionary keys such as duplicated or ",(0,n.jsx)(e.code,{children:"null"})," keys and warn the user that data loss can occur if the keys are not fixed."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Conflicting keys screenshot",src:r(4210).Z+"",width:"391",height:"83"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Null key screenshot",src:r(1137).Z+"",width:"391",height:"79"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["A non-generic derived class has to be created for each ",(0,n.jsx)(e.code,{children:"<TKey, TValue>"})," combination you want to use. A ",(0,n.jsx)(e.code,{children:"CustomPropertyDrawer"})," has to be declared for each of these classes."]}),"\n",(0,n.jsxs)(e.li,{children:["Multiple editing of scripts using ",(0,n.jsx)(e.code,{children:"SerializableDictionaries"})," in the inspector is not supported. The inspector will show the dictionaries but data loss is likely to occur."]}),"\n",(0,n.jsxs)(e.li,{children:["The conflicting key detection does not work when using ",(0,n.jsx)(e.code,{children:"LayerMask"})," as key. The ",(0,n.jsx)(e.code,{children:"LayerMask"})," value is changed after the ",(0,n.jsx)(e.code,{children:"CustomPropertyDrawer"})," execution."]}),"\n",(0,n.jsxs)(e.li,{children:["Dictionaries of lists or arrays must use the 3 arguments ",(0,n.jsx)(e.code,{children:"SerializableDictionary<TKey, TValue, TValueStorage>"})," dictionary class with the extra ",(0,n.jsx)(e.code,{children:"SerializableDictionary.Storage<TValue>"}),' class to hold the values. See the "Dictionary of lists or arrays" section for details.']}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,n.jsx)(e.h3,{id:"\u7b80\u5355\u7684\u5b57\u5178\u6848\u4f8b",children:"\u7b80\u5355\u7684\u5b57\u5178\u6848\u4f8b"}),"\n",(0,n.jsxs)(e.p,{children:["To create a serializable dictionary of type ",(0,n.jsx)(e.code,{children:"<string, string>"}),":"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Create a ",(0,n.jsx)(e.code,{children:"SerializableDictionary"})," subclass","\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"[Serializable]\r\npublic class StringStringDictionary : SerializableDictionary<string, string> {}\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["Use ",(0,n.jsx)(e.code,{children:"StringStringDictionary"})," in your scripts as a normal ",(0,n.jsx)(e.code,{children:"IDictionary<string, string>"})," type"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"\u5e26\u6709\u5217\u8868\u7684\u5b57\u5178\u6848\u4f8b",children:"\u5e26\u6709\u5217\u8868\u7684\u5b57\u5178\u6848\u4f8b"}),"\n",(0,n.jsxs)(e.p,{children:["To create a serializable dictionary of type ",(0,n.jsx)(e.code,{children:"<string, List<Color>>"}),":"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Create a ",(0,n.jsx)(e.code,{children:"SerializableDictionary.Storage"})," subclass to hold the list"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"[Serializable]\r\npublic class ColorListStorage : SerializableDictionary.Storage<List<Color>> {}\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Create a ",(0,n.jsx)(e.code,{children:"SerializableDictionary"})," subclass using the previous subclass"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"[Serializable]\r\npublic class StringColorListDictionary : SerializableDictionary<string, List<Color>, ColorListStorage> {}\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Use ",(0,n.jsx)(e.code,{children:"StringColorListDictionary"})," in your scripts as a normal ",(0,n.jsx)(e.code,{children:"IDictionary<string, List<Color>>"})," type"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u7ec6\u8282",children:"\u7ec6\u8282"}),"\n",(0,n.jsxs)(e.p,{children:["Older versions of Unity (before 2020.1) are unable to directly serialize generic types. Therefore, you need to create a derived class for each ",(0,n.jsx)(e.code,{children:"SerializedDictionary"})," specialization you want."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"[Serializable]\r\npublic class StringStringDictionary : SerializableDictionary<string, string> {}\r\n\r\n[Serializable]\r\npublic class MyScriptColorDictionary : SerializableDictionary<MyScript, Color> {}\n"})}),"\n",(0,n.jsx)(e.p,{children:"You can use your own serializable classes."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"[Serializable]\r\npublic class MyClass\r\n{\r\n    public int i;\r\n    public string str;\r\n}\r\n\r\n[Serializable]\r\npublic class StringMyClassDictionary : SerializableDictionary<string, MyClass> {}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["Add the dictionaries to your scripts and access them directly of through a property.\r\nThe dictionaries can be accessed through a property of type ",(0,n.jsx)(e.code,{children:"IDictionary<TKey, TValue>"})," for better encapsulation."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"public StringStringDictionary m_myDictionary1;\r\n\r\n[SerializeField]\r\nMyScriptColorDictionary m_myDictionary2;\r\npublic IDictionary<MyScript, Color> MyDictionary2\r\n{\r\n    get { return m_myDictionary2; }\r\n    set { m_myDictionary2.CopyFrom (value); }\r\n}\r\n\r\npublic StringMyClassDictionary m_myDictionary3;\n"})}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"CopyFrom(value)"})," method clears the ",(0,n.jsx)(e.code,{children:"m_myDictionary2"})," dictionary and adds to it each of content of the ",(0,n.jsx)(e.code,{children:"value"})," dictionary,  effectively copying ",(0,n.jsx)(e.code,{children:"value"})," into ",(0,n.jsx)(e.code,{children:"m_myDictionary2"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"SerializableDictionary"})," has a copy constructor from ",(0,n.jsx)(e.code,{children:"IDictionary<TKey, TValue>"}),". As constructors from parent classes cannot be used directly, you have to add a copy constructor to your derived classes calling the base constructor in order to use it."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"[Serializable]\r\npublic class StringColorDictionary : SerializableDictionary<string, Color>\r\n{\r\n    public StringColorDictionary(IDictionary<string, Color> dict) : base(dict) {}\r\n}\n"})}),"\n",(0,n.jsx)(e.h3,{id:"\u5305\u542b\u5217\u8868\u6216\u8005\u6570\u7ec4\u7684\u5b57\u5178",children:"\u5305\u542b\u5217\u8868\u6216\u8005\u6570\u7ec4\u7684\u5b57\u5178"}),"\n",(0,n.jsxs)(e.p,{children:["Because unity cannot serialize a array of lists or an array of arrays, using a ",(0,n.jsx)(e.code,{children:"SerializableDictionary<TKey, TValue[]>"})," or a ",(0,n.jsx)(e.code,{children:"SerializableDictionary<TKey, List<TValue>>"})," in a script will not work properly. The dictionary will not show up in the inspector and the values will not be saved."]}),"\n",(0,n.jsx)(e.p,{children:"It is necessary to create an intermediate class that will contain the list or array. This class can then be contained in an array and be serialized by Unity."}),"\n",(0,n.jsxs)(e.p,{children:["Create a class that inherits from ",(0,n.jsx)(e.code,{children:"SerializableDictionary.Storage<List<TValue>"}),". This storage class will only contain a ",(0,n.jsx)(e.code,{children:"List<TValue> data"})," field."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"[Serializable]\r\npublic class ColorListStorage : SerializableDictionary.Storage<List<Color>> {}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["If you use this storage class directly with SerializableDictionary, you will have to access the list or array through the ",(0,n.jsx)(e.code,{children:".data"})," field of the ",(0,n.jsx)(e.code,{children:"Storage"})," class because your dictionary will inherit from ",(0,n.jsx)(e.code,{children:"Dictionary<TKey, Storage<TValue>>"})," instead of ",(0,n.jsx)(e.code,{children:"Dictionary<TKey, List<TValue>>"}),". This is far from ideal."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"// non optimal example for a dictionary of color list\r\n[Serializable]\r\npublic class ColorListStorage : SerializableDictionary.Storage<List<Color>> {}\r\n[Serializable]\r\npublic class StringColorListDictionary : SerializableDictionary<string, ColorListStorage> {}\r\n\r\npublic StringColorListDictionary m_colorStringListDict;\r\n\r\n// you would have to access the color list through the .data field of ColorListStorage\r\nList<Color> colorList = m_colorStringListDict[key].data;\n"})}),"\n",(0,n.jsxs)(e.p,{children:["To access the lists directly, use the special 3 arguments ",(0,n.jsx)(e.code,{children:"SerializableDictionary<TKey, TValue, TValueStorage>"})," class where ",(0,n.jsx)(e.code,{children:"TValueStorage"})," is the class previously created."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"[Serializable]\r\npublic class ColorListStorage : SerializableDictionary.Storage<List<Color>> {}\r\n[Serializable]\r\npublic class StringColorListDictionary : SerializableDictionary<string, List<Color>, ColorListStorage> {}\r\n\r\npublic StringColorListDictionary m_colorStringListDict;\r\n\r\n// you can now access directly the color list\r\nList<Color> colorList = m_colorStringListDict[key];\n"})})]})}function h(i={}){const{wrapper:e}={...(0,a.a)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(d,{...i})}):d(i)}},2997:(i,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/SerializableDictionary_screenshot1-99b1a5ab0ea4760fe2fa7a11b1abfde6.png"},4210:(i,e,r)=>{r.d(e,{Z:()=>n});const n="data:image/png;base64,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"},1137:(i,e,r)=>{r.d(e,{Z:()=>n});const n="data:image/png;base64,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"},1151:(i,e,r)=>{r.d(e,{Z:()=>l,a:()=>t});var n=r(7294);const a={},s=n.createContext(a);function t(i){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function l(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:t(i.components),n.createElement(s.Provider,{value:e},i.children)}}}]);