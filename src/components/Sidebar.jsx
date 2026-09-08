import {
Home,
Server,
Network,
Bell,
FileText,
Settings
} from "lucide-react";


const menu=[

{
name:"Dashboard",
icon:Home
},

{
name:"Devices",
icon:Server
},

{
name:"Network Map",
icon:Network
},

{
name:"Alerts",
icon:Bell
},

{
name:"Logs",
icon:FileText
},

{
name:"Settings",
icon:Settings
}

]


export default function Sidebar(){


return(

<aside className="
hidden
md:block
w-64
bg-[#071426]
border-r
border-slate-800
p-5
">


<h2 className="
text-xl
font-bold
text-cyan-400
mb-8
">

NetOps Sentinel

</h2>


<nav className="space-y-3">


{
menu.map((item)=>(

<div
key={item.name}
className="
flex
items-center
gap-3
p-3
rounded-lg
hover:bg-slate-800
cursor-pointer
text-slate-300
"
>


<item.icon size={20}/>


<span>
{item.name}
</span>


</div>

))
}


</nav>


</aside>


)

}
