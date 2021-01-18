(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),i=n.n(r),s=n(10),l=n.n(s),o=(n(16),n(8)),c=n(7),h=n(3),u=n(4),j=n(2),d=n(6),b=n(5),p=(n(17),n(18),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/^\s/,""),n=0;(3>(t=t.replace(/ +/g," ")).length||35<t.length)&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.name_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Full Name"}),Object(a.jsx)("input",{placeholder:"Enter name",type:"name",value:t,id:"name",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:" Please enter a name between 3 to 35 charachters"})})]})}}]),n}(i.a.Component)),v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.trim(),n=0;0!==t.length&&/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(t)||(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.email_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(a.jsx)("input",{placeholder:"Enter email",type:"email",value:t,id:"email",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a valid email address"})})]})}}]),n}(i.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.trim(),n=0;0!==t.length&&/^[1-9][0-9]{9}$/.test(t)||(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.phone_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(a.jsx)("input",{placeholder:"Enter phone no.",type:"tel",value:t,id:"phone",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a valid 10 digits phone number"})})]})}}]),n}(i.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/^\s/,""),n=0;((t=t.replace(/ +/g," ")).length<4||t.length>100)&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.college_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"college",children:"College Name"}),Object(a.jsx)("input",{placeholder:"Enter college name",type:"text",value:t,id:"college",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a collge name between 3 to 100 charachters"})})]})}}]),n}(i.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/^\s/,""),n=0;(5>(t=t.replace(/ +/g," ")).length||50<t.length)&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.stream_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"stream",children:"Stream"}),Object(a.jsx)("input",{placeholder:"Enter stream",type:"stream",value:t,id:"stream",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:" Please enter a stream between 5 to 50 charachters"})})]})}}]),n}(i.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/\s$/,""),n=0;(1950>t||2021<t||!/^[0-9]{4}$/.test(t))&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.study_from_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"study_from",children:"College From"}),Object(a.jsx)("input",{placeholder:"Enter first year",type:"number",min:"1950",max:"2021",value:t,id:"study_from",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a valid year between 1950 to 2021"})})]})}}]),n}(i.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/\s$/,""),n=0;(1950>t||2025<t||!/^[0-9]{4}$/.test(t))&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.study_to_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"study_to",children:"College To"}),Object(a.jsx)("input",{placeholder:"Enter final year",type:"number",min:"1950",max:"2025",value:t,id:"study_to",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a valid year between 1950 to 2025"})})]})}}]),n}(i.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/^\s/,""),n=0;(3>(t=t.replace(/ +/g," ")).length||50<t.length)&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.company_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"company",children:"Company Name"}),Object(a.jsx)("input",{placeholder:"Enter company name",type:"text",value:t,id:"company",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a company name between 3 to 50 charachters"})})]})}}]),n}(i.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/^\s/,""),n=0;(3>(t=t.replace(/ +/g," ")).length||50<t.length)&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.position_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"position",children:"Position"}),Object(a.jsx)("input",{placeholder:"Enter your position",type:"text",value:t,id:"position",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a position between 3 to 50 charachters"})})]})}}]),n}(i.a.Component),_=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/^\s/,""),n=0;10>(t=t.replace(/ +/g," ")).length&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.description_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"description",children:"Description"}),Object(a.jsx)("textarea",{placeholder:"Enter a description",type:"text",value:t,id:"description",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a description of atleat 10 charachters"})})]})}}]),n}(i.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/\s$/,""),n=0;(1950>t||2021<t||!/^[0-9]{4}$/.test(t))&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.company_from_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"company_from",children:"From"}),Object(a.jsx)("input",{placeholder:"Enter joining year",type:"number",min:"1950",max:"2021",value:t,id:"company_from",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter a valid year between 1950 to 2021"})})]})}}]),n}(i.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target.value.replace(/^\s/,""),n=0;(1950>(t=t.replace(/ /g,""))||2025<t||!/^[0-9]{4}$/.test(t))&&"present"!==t.toLowerCase()&&(n=1),this.props.handleChange(e.target.id,t,n)}},{key:"render",value:function(){var e=this.props,t=e.company_to_value,n=e.error;return Object(a.jsxs)("div",{className:"input-box",children:[Object(a.jsx)("label",{htmlFor:"company_to",children:"To"}),Object(a.jsx)("input",{type:"text",placeholder:"Enter Present if working else year of leaving",value:t,id:"company_to",onInput:this.onChange}),Object(a.jsx)("div",{children:Object(a.jsx)("small",{style:n?{visibility:"visible"}:{visibility:"hidden"},children:"Please enter 'present' or a valid year between 1950 to 2025"})})]})}}]),n}(i.a.Component),E=function(e){var t=e.inputFields,n=e.handleChange,r=e.onSubmit;return Object(a.jsxs)("form",{onSubmit:r,children:[Object(a.jsx)("h2",{children:"Personal details"}),Object(a.jsx)(p,{name_value:t.name,error:t.errors.name,handleChange:n}),Object(a.jsx)(v,{email_value:t.email,error:t.errors.email,handleChange:n}),Object(a.jsx)(O,{phone_value:t.phone,error:t.errors.phone,handleChange:n}),Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{children:"Education"}),Object(a.jsx)(m,{college_value:t.college,error:t.errors.college,handleChange:n}),Object(a.jsx)(g,{stream_value:t.stream,error:t.errors.stream,handleChange:n}),Object(a.jsx)(y,{study_from_value:t.study_from,error:t.errors.study_from,handleChange:n}),Object(a.jsx)(x,{study_to_value:t.study_to,error:t.errors.study_to,handleChange:n}),Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{children:"Work Experience"}),Object(a.jsx)(f,{company_value:t.company,error:t.errors.company,handleChange:n}),Object(a.jsx)(C,{position_value:t.position,error:t.errors.position,handleChange:n}),Object(a.jsx)(_,{description_value:t.description,error:t.errors.description,handleChange:n}),Object(a.jsx)(k,{company_from_value:t.company_from,error:t.errors.company_from,handleChange:n}),Object(a.jsx)(w,{company_to_value:t.company_to,error:t.errors.company_to,handleChange:n}),Object(a.jsx)("button",{type:"submit",children:"Submit"})]})},F=(n(19),function(e){var t=e.inputFields;return Object(a.jsxs)("div",{className:"overview",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:t.name}),Object(a.jsx)("h2",{children:t.email}),Object(a.jsx)("h2",{children:t.phone})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Work Experience"}),Object(a.jsx)("h2",{children:t.company}),Object(a.jsxs)("h3",{children:[t.position," | ",t.company_from," - ",t.company_to]}),Object(a.jsx)("p",{children:t.description})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Education"}),Object(a.jsx)("h2",{children:t.college}),Object(a.jsxs)("h3",{children:[t.stream," | ",t.study_from," - ",t.study_to]})]}),Object(a.jsx)("button",{onClick:e.onClick,children:"Edit"})]})}),N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={name:"",email:"",phone:"",college:"",stream:"",study_from:"",study_to:"",company:"",position:"",description:"",company_from:"",company_to:"",to_show:"form",errors:{name:null,email:null,phone:null,college:null,stream:null,study_from:null,study_to:null,company:null,position:null,description:null,company_from:null,company_to:null}},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e.onSubmit=e.onSubmit.bind(Object(j.a)(e)),e.onEdit=e.onEdit.bind(Object(j.a)(e)),e}return Object(u.a)(n,[{key:"handleChange",value:function(e,t,n){this.setState(Object(c.a)({},e,t)),this.setState((function(t){return{errors:Object(o.a)(Object(o.a)({},t.errors),{},Object(c.a)({},e,n))}}))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),Object.keys(this.state.errors).forEach((function(e){null===t.state.errors[e]&&t.setState((function(t){return{errors:Object(o.a)(Object(o.a)({},t.errors),{},Object(c.a)({},e,1))}}))})),0===Object.keys(this.state.errors).filter((function(e){return console.log(3,t.state,t.state.errors[e],1===t.state.errors[e],e),1===t.state.errors[e]})).length?this.setState({to_show:"cv"}):this.setState({to_show:"form"}),this.setState({to_show:"loading"}),setTimeout((function(){t.changeView()}),1e3)}},{key:"changeView",value:function(){var e=this;console.log(2),0===Object.keys(this.state.errors).filter((function(t){return console.log(3,e.state,e.state.errors[t],1===e.state.errors[t],t),1===e.state.errors[t]})).length?this.setState({to_show:"cv"}):this.setState({to_show:"form"})}},{key:"onEdit",value:function(e){e.preventDefault(),this.setState({to_show:"form"})}},{key:"render",value:function(){return"form"===this.state.to_show?Object(a.jsxs)("div",{className:"App-header",children:[Object(a.jsx)("header",{children:"Make Your CV"}),Object(a.jsx)(E,{inputFields:this.state,handleChange:this.handleChange,onSubmit:this.onSubmit})]}):"cv"===this.state.to_show?Object(a.jsx)("div",{className:"App-header",children:Object(a.jsx)(F,{inputFields:this.state,onClick:this.onEdit})}):Object(a.jsx)("div",{className:"App-header",style:{marginTop:"30px"},children:"Loading..."})}}]),n}(i.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),S()}},[[20,1,2]]]);
//# sourceMappingURL=main.ed0bf3b2.chunk.js.map