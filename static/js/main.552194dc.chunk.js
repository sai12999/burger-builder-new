(window["webpackJsonpburger-builder-new"]=window["webpackJsonpburger-builder-new"]||[]).push([[0],{14:function(e,t,n){e.exports={BreadBottom:"BurgerIngredients__BreadBottom__16czh",BreadTop:"BurgerIngredients__BreadTop__1F9cD",Seeds1:"BurgerIngredients__Seeds1__1KqDN",Seeds2:"BurgerIngredients__Seeds2__1j0Rg",Meat:"BurgerIngredients__Meat__1kFCF",Cheese:"BurgerIngredients__Cheese__3JVcn",Salad:"BurgerIngredients__Salad__142r8",Bacon:"BurgerIngredients__Bacon__3LSem"}},19:function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l",Logo:"SideDrawer__Logo__3TkPv"}},21:function(e,t,n){e.exports={ToolBar:"ToolBar__ToolBar__8z9jd",Nav:"ToolBar__Nav__B3UsM",Logo:"ToolBar__Logo__3-gJ4",DesktopOnly:"ToolBar__DesktopOnly__2Ye4V"}},22:function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},23:function(e,t,n){e.exports={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx",Invalid:"Input__Invalid__1sl1p"}},27:function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT",enable:"BuildControls__enable__3jYIq",Label:"BuildControls__Label__2WDRj"}},29:function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},32:function(e,t,n){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},44:function(e,t,n){e.exports={Content:"Layout__Content__LhJtv"}},45:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},46:function(e,t,n){e.exports={Logo:"Logo__Logo__19WaN"}},47:function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},49:function(e,t,n){e.exports={BackDrop:"BackDrop__BackDrop__wZny4"}},50:function(e,t,n){e.exports={Burger:"Burger__Burger__3K4F-"}},51:function(e,t,n){e.exports={Modal:"Modal__Modal__32_-a"}},53:function(e,t,n){e.exports={Loader:"Spinner__Loader__1DDwY",load6:"Spinner__load6__3S2CE",round:"Spinner__round__2qdnM"}},55:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},56:function(e,t,n){e.exports={ContactDetails:"ContactDetails__ContactDetails__201sv",Input:"ContactDetails__Input__221hp"}},57:function(e,t,n){e.exports={Order:"Order__Order__4yi4Z"}},59:function(e,t,n){e.exports=n(87)},64:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(24),o=n.n(i),c=(n(64),n(2)),l=n(3),s=n(5),u=n(4),d=n(6),p=function(e){return e.children},m=n(44),h=n.n(m),g=n(21),b=n.n(g),f=n(45),_=n.n(f),v=n(46),y=n.n(v),E=function(e){return r.a.createElement("div",{className:y.a.Logo},r.a.createElement("img",{src:_.a}))},O=n(47),j=n.n(O),k=n(29),C=n.n(k),N=n(18),w=function(e){return r.a.createElement("li",{className:C.a.NavigationItem},r.a.createElement(N.b,{exact:e.exact,to:e.link,activeClassName:C.a.active},e.children))},B=function(e){return r.a.createElement("ul",{className:j.a.NavigationItems},r.a.createElement(w,{exact:!0,link:"/"},"Burger Builder"),r.a.createElement(w,{link:"/orders"},"Orders"))},D=function(e){return r.a.createElement("header",{className:b.a.ToolBar},r.a.createElement("div",{onClick:function(){return e.sdclicked()}},"Menu"),r.a.createElement("div",{className:b.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:b.a.Nav},r.a.createElement("div",{className:b.a.DesktopOnly},r.a.createElement(B,null))))},S=n(19),I=n.n(S),T=n(49),x=n.n(T),H=function(e){return e.show?r.a.createElement("div",{className:x.a.BackDrop,onClick:function(){return e.bdclicked()}}):null},P=function(e){var t=[I.a.SideDrawer,I.a.Close];return e.show&&(t=[I.a.SideDrawer,I.a.Open]),r.a.createElement(p,null,r.a.createElement(H,{show:e.show,bdclicked:e.bdclicked}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:I.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(B,null))))},L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"sideDrawerCloseHandler",value:function(){this.setState({open:!1})}},{key:"sideDrawerToggleHandler",value:function(){!0===this.state.open?this.setState({open:!1}):this.setState({open:!0}),this.setState({open:!0})}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(P,{show:this.state.open,bdclicked:this.sideDrawerCloseHandler.bind(this)}),r.a.createElement(D,{sdclicked:this.sideDrawerToggleHandler.bind(this)}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(a.Component),M=n(16),F=n(58),R=n(14),Y=n.n(R),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Y.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Y.a.Meat});break;case"bacon":e=r.a.createElement("div",{className:Y.a.Bacon});break;case"cheese":e=r.a.createElement("div",{className:Y.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Y.a.Salad});break;default:e=null}return e}}]),t}(a.Component),A=n(50),V=n.n(A),W=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(F.a)(Array(e.ingredients[t])).map(function(e,n){return r.a.createElement(q,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please Start Adding Ingredients")),r.a.createElement("div",{className:V.a.Burger},r.a.createElement(q,{type:"bread-top"}),t,r.a.createElement(q,{type:"bread-bottom"}))},J=n(27),z=n.n(J),U=n(22),G=n.n(U),Z=function(e){return r.a.createElement("div",{className:G.a.BuildControl},r.a.createElement("div",{className:G.a.Label},e.label),r.a.createElement("button",{className:G.a.Less,onClick:e.deleted,disabled:e.disabled},"Less"),r.a.createElement("button",{className:G.a.More,onClick:e.added},"More"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],K=function(e){return r.a.createElement("div",{className:z.a.BuildControls},r.a.createElement("div",null,r.a.createElement("label",{className:z.a.Label},"Price Of Your Burger : "),e.price,"$"),$.map(function(t){return r.a.createElement(Z,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},deleted:function(){return e.ingredientDeleted(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:z.a.OrderButton,disabled:!e.purchasable,onClick:function(){return e.purchasingHandler()}},"Order Now"))},Q=n(51),X=n.n(Q),ee=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(H,{show:this.props.show,bdclicked:this.props.bdclicked}),r.a.createElement("div",{className:X.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-1000vh)"}},this.props.children))}}]),t}(a.Component),te=n(32),ne=n.n(te),ae=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},re=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return r.a.createElement("div",null,"Your Yummy Burger With Following Ingredients Is Ready",r.a.createElement("ul",null,t),r.a.createElement("p",null,"Total Price : ",this.props.price,"$"),r.a.createElement("p",null,"Do You Want To Checkout!!"),r.a.createElement(ae,{btnType:"Danger",clicked:this.props.purchaseCancelHandler},"Cancel"),r.a.createElement(ae,{btnType:"Success",clicked:this.props.purchaseContinueHandler},"Continue"))}}]),t}(a.Component),ie=n(52),oe=n.n(ie).a.create({baseURL:"https://react-db-9d268.firebaseio.com"}),ce=n(53),le=n.n(ce),se=function(){return r.a.createElement("div",{className:le.a.Loader},"Loading")},ue=function(e,t){return function(n){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t}return Object(d.a)(a,n),Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.axiosResponseRef=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})}),this.axiosRequestRef=t.interceptors.request.use(function(t){return e.setState({error:null}),t})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.axiosRequestRef),t.interceptors.response.eject(this.axiosResponseRef)}},{key:"errorConfirmedHandler",value:function(){this.setState({error:null})}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(ee,{show:this.state.error,bdclicked:this.errorConfirmedHandler.bind(this)},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},de=n(15);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var me=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={purchasable:!1,purchasing:!1,loading:!1},n.cancelPurchaseHandler=function(){n.setState({purchasing:!1})},n.continuePurchaseHandler=function(){n.props.history.push("/checkout")},n.purchasingHandler=function(){n.setState({purchasing:!0})},n.purchasableHandler=function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+=t},0)>0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach(function(t){Object(M.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null;this.state.loading&&(n=r.a.createElement(se,null));var a=r.a.createElement(se,null);return this.props.ings&&(a=r.a.createElement(p,null,r.a.createElement(W,{ingredients:this.props.ings}),r.a.createElement(K,{ingredientAdded:this.props.addIngredientHandler,ingredientDeleted:this.props.deleteIngredientHandler,disabled:e,purchasable:this.purchasableHandler(this.props.ings),purchasingHandler:this.purchasingHandler,price:this.props.price})),n=r.a.createElement(re,{ingredients:this.props.ings,purchaseCancelHandler:this.cancelPurchaseHandler,purchaseContinueHandler:this.continuePurchaseHandler,price:this.props.price})),r.a.createElement(p,null,r.a.createElement(ee,{show:this.state.purchasing,bdclicked:this.cancelPurchaseHandler},n),a)}}]),t}(a.Component),he=Object(de.b)(function(e){return console.log(e),{ings:e.ingredients,price:e.totalPrice}},function(e){return{addIngredientHandler:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},deleteIngredientHandler:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})}}})(ue(me,oe)),ge=n(55),be=n.n(ge),fe=function(e){return r.a.createElement("div",{className:be.a.CheckoutSummary},r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(W,{ingredients:e.ingredients})),r.a.createElement(ae,{btnType:"Success",clicked:e.checkoutContinue},"Continue"),r.a.createElement(ae,{btnType:"Danger",clicked:e.checkoutCancel},"Cancel"))},_e=n(17),ve=n(56),ye=n.n(ve),Ee=n(23),Oe=n.n(Ee),je=function(e){var t=null,n=[Oe.a.InputElement];switch(e.invalid&&e.isTouched&&n.push(Oe.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onFocus:e.changeHandler,onChange:e.changeHandler,required:!0}));break;case"textArea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onFocus:e.changeHandler,onChange:e.changeHandler,required:!0}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),onFocus:e.changeHandler,onChange:e.changeHandler},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onFocus:e.changeHandler,onChange:e.changeHandler,required:!0}))}return r.a.createElement("div",{className:Oe.a.Input},r.a.createElement("label",{className:Oe.a.Label},e.label),t)};function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Ce=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ordersForm:{name:{elementType:"input",elementConfig:{placeholder:"Your Name",type:"text"},validations:{required:!0},value:"",valid:!1,isTouched:!1},email:{elementType:"input",elementConfig:{placeholder:"Your Mail",type:"text"},validations:{required:!0},value:"",valid:!1,isTouched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fast Delivery"},{value:"normal",displayValue:"Normal Delivery"}]},value:"fastest",validations:{},valid:!0,isTouched:!0},street:{elementType:"input",elementConfig:{placeholder:"Your Street",type:"text"},validations:{required:!0},value:"",valid:!1,isTouched:!1},postalcode:{elementType:"input",elementConfig:{placeholder:"Your ZipCode",type:"text"},validations:{required:!0},value:"",valid:!1,isTouched:!1}},isValid:!1,loading:!1},n.validityHandler=function(e,t){var n=!0;return t?(t.required&&(n=""!==e.trim("")),n):n},n.orderHandler=function(e){e.preventDefault(),n.setState({loading:!0});var t={};for(var a in n.state.ordersForm)t[a]=n.state.ordersForm[a].value;var r={ingredients:n.props.ingredients,price:n.props.price,orderData:t};oe.post("/orders.json",r).then(function(e){return n.setState({loading:!1})}).catch(function(e){return n.setState({loading:!1})}),n.props.history.push("/")},n.changeHandler=function(e,t){var a=!0,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(n,!0).forEach(function(t){Object(M.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.state.ordersForm);for(var i in r[t].value=e.target.value,r[t].valid=n.validityHandler(r[t].value,r[t].validations),n.state.ordersForm)a=a&&n.state.ordersForm[i].valid;r[t].isTouched=!0,n.setState({ordersForm:r,isValid:a})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Assam")}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.ordersForm)t.push({id:n,config:this.state.ordersForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return console.log("istouched"+t.id.isTouched),r.a.createElement(je,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changeHandler:function(n){return e.changeHandler(n,t.id)},invalid:!e.state.ordersForm[t.id].valid,isTouched:e.state.ordersForm[t.id].isTouched})}),r.a.createElement(ae,{btnType:"Success",disabled:!this.state.isValid,clicked:this.orderHandler},"Order"));return console.log(this.state.ordersForm),this.state.loading&&(a=r.a.createElement(se,null)),r.a.createElement("div",{className:ye.a.ContactDetails},r.a.createElement("h3",null,"Enter your contact details"),a)}}]),t}(a.Component),Ne=Object(de.b)(function(e){return{ingredients:e.ingredients,price:e.totalPrice}})(Object(_e.e)(Ce)),we=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"checkoutContinueHandler",value:function(){this.props.history.push("/checkout/contactdetails")}},{key:"checkoutCancelHandler",value:function(){this.props.history.goBack()}},{key:"componentDidMount",value:function(){console.log("checkout mounted")}},{key:"render",value:function(){return console.log(this.props.match.url+"/contactdetails"),r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Burger Preview"),r.a.createElement(fe,{ingredients:this.props.ingredients,checkoutContinue:this.checkoutContinueHandler.bind(this),checkoutCancel:this.checkoutCancelHandler.bind(this)}),r.a.createElement(_e.a,{exact:!0,path:this.props.match.url+"/contactdetails",component:Ne}))}}]),t}(a.Component),Be=Object(de.b)(function(e){return{ingredients:e.ingredients}})(we),De=n(57),Se=n.n(De),Ie=function(e){var t=0;console.log(e.ingredients);var n=Object.keys(e.ingredients).map(function(n){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px",boxSizing:"border-box"},key:t++},n," : ",e.ingredients[n]," ")});return console.log(e.ingredients),r.a.createElement("div",{className:Se.a.Order},r.a.createElement("b",null,"Ingredients")," : ",n,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Price")," : ",e.price)},Te=ue(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={orders:null,loading:!0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;oe.get("/orders.json").then(function(t){e.setState({orders:t.data,loading:!1})})}},{key:"render",value:function(){var e=null;this.state.loading&&(e=r.a.createElement(se,null));var t=null;if(this.state.orders){var n=this.state.orders;t=Object.keys(n).reverse().map(function(e){return r.a.createElement(Ie,{key:e,ingredients:n[e].ingredients,price:n[e].price})})}return r.a.createElement("div",null,e,t)}}]),t}(a.Component),oe);var xe=function(){return r.a.createElement("div",null,r.a.createElement(L,null,r.a.createElement(_e.a,{exact:!0,path:"/",component:he}),r.a.createElement(_e.a,{path:"/checkout",component:Be}),r.a.createElement(_e.a,{path:"/orders",component:Te})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=n(26);function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(n,!0).forEach(function(t){Object(M.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Me={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4},Fe={meat:.6,salad:.3,bacon:.3,cheese:.5},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Le({},e,{ingredients:Le({},e.ingredients,Object(M.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+Fe[t.ingredientName]});case"REMOVE_INGREDIENT":return Le({},e,{ingredients:Le({},e.ingredients,Object(M.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-Fe[t.ingredientName]});default:return e}},Ye=Object(He.b)(Re),qe=r.a.createElement(de.a,{store:Ye},r.a.createElement(N.a,null,r.a.createElement(xe,null)));o.a.render(qe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[59,1,2]]]);
//# sourceMappingURL=main.552194dc.chunk.js.map