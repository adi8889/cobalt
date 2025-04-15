import { usePathname } from "next/navigation"


export default()=>{
    const path=usePathname();
    return(
        <div>
            <ul className="flex felx-row justify-center items-center gap-6 list-none"></ul>
            <li key={"Home"}>Home</li>
            <li key={"Enterprise"}>Enterprise</li>
            <li key={"Pricing"}>Pricing</li>

        </div>
    )
}