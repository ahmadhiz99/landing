import{V as D,b as a,j as e,M as F,h as m}from"./app-Ch82WsY0.js";import{A as L}from"./AuthenticatedLayout-B8sWuzLd.js";import{I as l}from"./InputLabel-BjFWi6qo.js";import{T as p}from"./TextInput-c4y1Jyj5.js";import{R as k}from"./quill.snow-5DkSlDGx.js";import{y as f,L as T}from"./index-XTkzLqz7.js";import"./transition-DOALJN_u.js";function V({auth:I,flash:v,blog:t}){const r=D().props;console.log(t);const[n,j]=a.useState(t==null?void 0:t.content),[i,y]=a.useState(t==null?void 0:t.title),[o,g]=a.useState(t==null?void 0:t.category),[c,N]=a.useState(t==null?void 0:t.subcategory),[d,w]=a.useState(t==null?void 0:t.label),[x,E]=a.useState(t==null?void 0:t.id),[u,P]=a.useState(t==null?void 0:t.status);a.useEffect(()=>{var s,h;console.log(r.flash),((s=r.flash.response)==null?void 0:s.status)==200&&f.success(r.flash.response.message),((h=r.flash.response)==null?void 0:h.status)==500&&f.error(r.flash.response.message)},[v]);const C=s=>{s.preventDefault(),m.visit(route("blog.store.draft"),{method:"post",forceFormData:!0,data:{title:i,content:n,category:o,subcategory:c,label:d,status:"draft",id:x}})},S=s=>{s.preventDefault(),m.visit(route("blog.store.publish"),{method:"post",forceFormData:!0,data:{title:i,content:n,category:o,subcategory:c,label:d,status:"publish",id:x}})};return e.jsxs(L,{header:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200",children:"Create Blogs"}),u=="publish"?e.jsx("h4",{className:"text-white bg-green-400 p-1 px-3 rounded-lg text-sm font-semibold leading-tight text-gray-800 dark:text-gray-200",children:u}):e.jsx("h4",{className:"text-white bg-gray-400 p-1 px-3 rounded-lg text-sm font-semibold leading-tight text-gray-800 dark:text-gray-200",children:u})]}),children:[e.jsx(F,{title:"Dashboard"}),e.jsx(T,{}),e.jsx("div",{className:"py-",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsxs("div",{className:" flex flex-col gap-4 bg-white p-6 shadow rounded-lg",children:[e.jsxs("div",{className:"flex flex-row gap-16 justify-between",children:[e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"category",value:"Category"}),e.jsxs("select",{name:"category",value:o,onChange:s=>g(s.target.value),id:"",className:"border-gray-400 rounded",children:[e.jsx("option",{value:"",children:"--Choose--"}),e.jsx("option",{value:"1",children:"Bahasa Pemrograman"}),e.jsx("option",{value:"2",children:"Database"})]})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"subcategory",value:"Subcategory"}),e.jsxs("select",{name:"subcategory",value:c,onChange:s=>N(s.target.value),id:"",className:"border-gray-400 rounded",children:[e.jsx("option",{value:"",children:"--Choose--"}),e.jsx("option",{value:"1",children:"Golang"}),e.jsx("option",{value:"2",children:"Laravel"})]})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"label",value:"Tags / label"}),e.jsx(p,{id:"label",value:d,onChange:s=>w(s.target.value),className:"w-full"})]})]}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx("button",{className:"mt-4 px-4 py-2 bg-yellow-500 text-white rounded",onClick:s=>C(s),children:"Save as Draft"}),e.jsx("button",{className:"mt-4 px-4 py-2 bg-green-500 text-white rounded",onClick:s=>S(s),children:"Publish"})]})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"title",value:"Title"}),e.jsx(p,{id:"title",value:i,onChange:s=>y(s.target.value),className:"w-full"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"content",value:"Content"}),e.jsx(k,{id:"content",value:n,onChange:j,theme:"snow",className:"h-[700px] mb-16"})]})]})})})]})}export{V as default};
