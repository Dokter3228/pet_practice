"use strict";(self.webpackChunktut=self.webpackChunktut||[]).push([[384],{"./src/pages/MainPage/ui/MainPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,default:()=>MainPage_stories});var _extendStatics,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react=__webpack_require__("./node_modules/react/index.js"),PageError=__webpack_require__("./src/widgets/PageError/ui/PageError.tsx"),__extends=(_extendStatics=function extendStatics(d,b){return _extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},_extendStatics(d,b)},function(d,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),ErrorBoundary_ErrorBoundary=function(_super){function ErrorBoundary(props){var _this=_super.call(this,props)||this;return _this.state={hasError:!1},_this}return __extends(ErrorBoundary,_super),ErrorBoundary.getDerivedStateFromError=function(error){return console.log(error),{hasError:!0}},ErrorBoundary.prototype.componentDidCatch=function(error,info){console.log(error,info.componentStack)},ErrorBoundary.prototype.render=function(){var hasError=this.state.hasError,children=this.props.children;return hasError?(0,jsx_runtime.jsx)(PageError.S,{}):children},ErrorBoundary}(react.Component);try{ErrorBoundary_ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary_ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary_ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx#ErrorBoundary"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),BugButton_BugButton=function BugButton(){var t=(0,es.$G)().t,_a=(0,react.useState)(!1),error=_a[0],setError=_a[1];(0,react.useEffect)((function(){if(error)throw new Error("yep, here the error is!")}),[error]);return(0,jsx_runtime.jsx)(Button.z,{onClick:function onThrow(){setError(!0)},children:t("throw an error!")})};try{BugButton_BugButton.displayName="BugButton",BugButton_BugButton.__docgenInfo={description:"",displayName:"BugButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ErrorBoundary/ui/BugButton.tsx#BugButton"]={docgenInfo:BugButton_BugButton.__docgenInfo,name:"BugButton",path:"src/app/providers/ErrorBoundary/ui/BugButton.tsx#BugButton"})}catch(__react_docgen_typescript_loader_error){}try{ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ErrorBoundary/index.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/app/providers/ErrorBoundary/index.tsx#ErrorBoundary"})}catch(__react_docgen_typescript_loader_error){}try{BugButton.displayName="BugButton",BugButton.__docgenInfo={description:"",displayName:"BugButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ErrorBoundary/index.tsx#BugButton"]={docgenInfo:BugButton.__docgenInfo,name:"BugButton",path:"src/app/providers/ErrorBoundary/index.tsx#BugButton"})}catch(__react_docgen_typescript_loader_error){}var MainPage=function MainPage(){var t=(0,es.$G)("main").t;return(0,jsx_runtime.jsxs)("div",{children:[t("Main page"),(0,jsx_runtime.jsx)(BugButton_BugButton,{})]})};const ui_MainPage=MainPage;try{MainPage.displayName="MainPage",MainPage.__docgenInfo={description:"",displayName:"MainPage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/MainPage/ui/MainPage.tsx#MainPage"]={docgenInfo:MainPage.__docgenInfo,name:"MainPage",path:"src/pages/MainPage/ui/MainPage.tsx#MainPage"})}catch(__react_docgen_typescript_loader_error){}var _a,_b,_c,_d,_e,_f,ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),themeProvider=__webpack_require__("./src/app/providers/themeProvider/index.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const MainPage_stories={title:"pages/MainPage",component:ui_MainPage,tags:["autodocs"],argTypes:{}};var Light={render:function render(){return(0,jsx_runtime.jsx)(ui_MainPage,{})}},Dark={decorators:[(0,ThemeDecorator.F)(themeProvider.Q2.DARK)],render:function render(){return(0,jsx_runtime.jsx)(ui_MainPage,{})}};Light.parameters=__assign(__assign({},Light.parameters),{docs:__assign(__assign({},null===(_a=Light.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{\n  render: () => <MainPage />\n}"},null===(_c=null===(_b=Light.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),Dark.parameters=__assign(__assign({},Dark.parameters),{docs:__assign(__assign({},null===(_d=Dark.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:"{\n  decorators: [ThemeDecorator(Theme.DARK)],\n  render: () => <MainPage />\n}"},null===(_f=null===(_e=Dark.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})})},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});var __spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))};function classNames(cls,mods,additional){return void 0===mods&&(mods={}),void 0===additional&&(additional=[]),__spreadArray(__spreadArray([cls],additional.filter(Boolean),!0),Object.entries(mods).filter((function(_a){var value=_a[1];return Boolean(value)})).map((function(_a){return _a[0]})),!0).join(" ")}},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,U:()=>ThemeButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var ThemeButton,__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};!function(ThemeButton){ThemeButton.CLEAR="clear",ThemeButton.OUTLINE="outline"}(ThemeButton||(ThemeButton={}));var Button=function Button(props){var className=props.className,children=props.children,_a=props.theme,theme=void 0===_a?"":_a,otherProps=__rest(props,["className","children","theme"]);return(0,jsx_runtime.jsx)("button",__assign({className:(0,classNames.A)(Button_Button_module.Button,{},[null!=className?className:"",Button_Button_module[theme]])},otherProps,{children}))};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"outline"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/PageError/ui/PageError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PageError});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PageError_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PageError_module.Z,options);const ui_PageError_module=PageError_module.Z&&PageError_module.Z.locals?PageError_module.Z.locals:void 0;var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),PageError=function PageError(_a){var _b=_a.className,className=void 0===_b?"":_b,t=(0,es.$G)().t;return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(ui_PageError_module.PageError,{},[className]),children:[t("Some error just appeared"),(0,jsx_runtime.jsx)(Button.z,{onClick:function reloadPage(){location.reload()},children:t("Reload the page")})]})};try{PageError.displayName="PageError",PageError.__docgenInfo={description:"",displayName:"PageError",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/PageError/ui/PageError.tsx#PageError"]={docgenInfo:PageError.__docgenInfo,name:"PageError",path:"src/widgets/PageError/ui/PageError.tsx#PageError"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button{cursor:pointer;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clear{padding:0;border:none;background:none;outline:none}.src-shared-ui-Button-Button-module__outline{padding:5px 10px;background:none;border:1px solid var(--primary-color)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,4CACI,cAAA,CACA,0BAAA,CAGJ,2CACI,SAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CAGJ,6CACI,gBAAA,CACA,eAAA,CACA,qCAAA",sourcesContent:[".Button {\n    cursor: pointer;\n    color: var(--primary-color)\n}\n\n.clear {\n    padding: 0;\n    border: none;\n    background: none;\n    outline: none;\n}\n\n.outline {\n    padding: 5px 10px;\n    background:none;\n    border: 1px solid var(--primary-color);\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button",clear:"src-shared-ui-Button-Button-module__clear",outline:"src-shared-ui-Button-Button-module__outline"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-PageError-ui-PageError-module__PageError{width:100%;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column}","",{version:3,sources:["webpack://./src/widgets/PageError/ui/PageError.module.scss"],names:[],mappings:"AAAA,sDACI,UAAA,CACA,YAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA",sourcesContent:[".PageError {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={PageError:"src-widgets-PageError-ui-PageError-module__PageError"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);