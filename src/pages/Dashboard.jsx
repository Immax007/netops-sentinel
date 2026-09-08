import Sidebar from "../components/Sidebar";
import Header from "../components/Header";


export default function Dashboard(){


return(

<div className="
min-h-screen
bg-[#020617]
flex
">


<Sidebar/>


<div className="
flex-1
">


<Header/>


<main className="
p-6
">

<h1 className="
text-3xl
font-bold
">

Network Operations Center

</h1>


<p className="
text-slate-400
mt-2
">

Real-time infrastructure monitoring dashboard

</p>


</main>


</div>


</div>

)

}
