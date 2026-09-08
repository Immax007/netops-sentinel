import {Bell} from "lucide-react";


export default function Header(){


return(

<header className="
h-20
border-b
border-slate-800
flex
items-center
justify-between
px-6
">


<div>

<h2 className="
font-semibold
">

Network Healthy

</h2>


<p className="
text-green-400
text-sm
">

● All systems operational

</p>

</div>


<div className="
flex
items-center
gap-5
">


<Bell/>


<div className="
bg-cyan-600
rounded-full
w-10
h-10
flex
items-center
justify-center
">

EO

</div>


</div>


</header>

)

}
