import "./styles/upperContent.css"
import Logo from "./images/Logo.png"

import menu from "./images/menu.png"

export const UpperContent = () => {
    return (
        <div className=" " style={{padding: "0 9%", backgroundColor:"#F5FCFF"}}>
            <nav class="p-4">
            <div class="container mx-auto flex justify-between items-center">
    
        

  
        <div class="hidden lg:flex space-x-9 ">
            <a href="#" class="-m-1.5 text-sm text-white w-40 h-10 rounded-full bg-blue-400 p-2 flex items-center justify-center " >التواصل مع المبيعات</a>
 
            <a href="#" className="text-black">عن الشركة</a>
            <a href="#" class="text-black">مشاريعنا</a>
            <a href="#" class="text-black">الخدمات</a>
            <a href="#" class="text-black">أسألة مكررة</a>
            <a href="#" class="text-black">أتصل بنا</a>

            
        </div>

        <div id="mobile-menu" class="lg:hidden w-16 p-4"><img src={menu}/></div> 
        <div>
            <img href="#" src={Logo} className="w-44 h-8"/>
        </div>



        
            </div>
        </nav>





    </div>
    )
}