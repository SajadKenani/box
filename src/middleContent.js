import "./styles/middleContent.css"
import HomeImage from "./images/HomeImage.png"
import shareLinkIcon from "./images/shareLinkIcon.png"
import copyLinkIcon from "./images/copyLinkIcon.png"

import myVector from "./images/Vector 2.png"
import myVector2 from "./images/Vector 4.png"
import myVector3 from "./images/Vector 3.png"

import myPenIcom from "./images/penIcon.png"
import moneySignIcon from "./images/moneySignIcon.png"
import speedIcon from "./images/speedIcon.png"
import bagIcon from "./images/bagIcon.png"
import starsIcon from "./images/starsIcon.png"
import clientAssistanceIcon from "./images/clientAssistanceIcon.png"
import boxImage from "./images/boxImage.png"

import sara_pfp from "./images/sara_PFP.png"
import ahmed_pfp from "./images/ahmed_PFP.png"
import abdullah_pfp from "./images/abdullah-PFP.png"

import blurAppplication from "./images/blurAppplication.png"
import blurCApplication from "./images/blurCApplication.png"
import blurWeb from "./images/blurWeb.png"
import blurCWeb from "./images/blurCWeb.png"
import blurGraphic from "./images/blurGraphic.png"
import blurMVP from "./images/blurMVP.png"
import blurProject from "./images/blurProject.png"


import appImage from "./images/appImage.png"
import CApplication from "./images/CApplication.png"
import Web from "./images/Web.png"
import CWeb from "./images/CWeb.png"
import Graphic from "./images/Graphic.png"
import mvp from "./images/mvp.png"
import project from "./images/project.png"



import Project_card_One from "./images/Project_card_One.png"

import {paddingLR} from "./App"

const myPadding = 10;


export const MiddleContent = () => {
    return (
        <div>
            {/* Home Section */}
            <img className=" homeImage " src={HomeImage} />
            <div className=" homeImageContent  justify-end  p-70 " style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}}>


                <div className="flex justify-end item-end">
                <h1 className="myMainText lg:text-7xl md:text-4xl sm:text-4xl text-4xl leading-8 text-bold">إبداع رقمي يتجسّد في تصميم مواقع مبــتــكرة</h1>
                </div>

                <div className="flex justify-end item-end mt-5" >
                <p className="lg:text-2xl text-medium" style={{width: "720px", fontWeight:"400"}}>استراتيجيات تصميم مواقع تسهم في تحقيق أهدافك مهما كان حجم مشروعك او شركتك ستجد الحلول المناسبة لدينا!</p>
                </div>

                <div className="flex justify-end item-end pt-10 pb-28 button ">
                    <button className="text-sm text-blue-400 w-40 h-10 rounded-full bg-white-400">تصـفـح أعمالنا</button>
                    <button className="text-sm text-white w-40 h-10 rounded-full bg-blue-400">أعرف المزيد</button>

                </div>

            </div>

            {/* Share Link Section */}

            <div className="shareLink-div h-30 flex justify-between" style={{paddingLeft: paddingLR+"%", paddingRight: paddingLR+"%"}} >
    
                <img className="h-16 mt-9" src={shareLinkIcon} />

                <div className="" >
                  <p className="text-3xl mb-3 mt-5 font-medium" style={{color:"#253B80"}}>ساعدنا في التقدم اكثر! شارك الموقع</p>
                  
                  <div className="flex justify-end mb-10">
                     <a style={{color:"#2997D8"}} className="text-lg mr-2">www.inboxcompany.com</a>
                     <img className="h-6" src={copyLinkIcon}/>
                  </div>

                </div>
            </div>

            {/* Our Projects Section */}
            <div style={{paddingBottom:"50px", backgroundColor:"#F5FCFF"}} className="">

            <div className="mainOurProject-Section" style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}}>

                <h1 className="text-4xl p-10 text-bold" style={{fontWeight:"500", paddingTop:"60px"}} >مشــــاريــــعنا</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 " style={{position:"relative", zIndex:"4327"}}>
                <img class="m-3 object-cover rounded-md overflow-hidden shadow-md" src={Project_card_One} alt="Card Image" />
    
                <img class="m-3 object-cover rounded-md overflow-hidden shadow-md" src={Project_card_One} alt="Card Image" />
          
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-1" style={{position:"relative", zIndex:"4327"}}>
                <img class="m-3 object-cover rounded-md overflow-hidden shadow-md" src={Project_card_One} alt="Card Image" />
    
                <img class="m-3 object-cover rounded-md overflow-hidden shadow-md" src={Project_card_One} alt="Card Image" />
 
                <img class="m-3 object-cover rounded-md overflow-hidden shadow-md" src={Project_card_One} alt="Card Image" />
          
            </div>

            </div>

            <img src={myVector} className="myVector1   hidden lg:flex  "/>
            <img src={myVector2} className="myVector2  hidden lg:flex "/>
            <img src={myVector3} className="myVector3  hidden lg:flex "/>

     

            {/* Our Goals and Princples Section  */}

            <h1 className="text-4xl p-10 text-bold"  >المــبــادئ و الأهـداف</h1>

          <div className="" style={{alignContent:"center", display:"flex", justifyContent:"center"}} >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{width:"1140px"}}>

            <div class=" w-6/2 sm:w-10 overflow-hidden items-center mt-52 myBox" >

             <div className="flex justify-end p-3 -mb-4">
                 <img class=" h-12 w-12 object-cover mt-5" src={boxImage} alt="Card Image" />
             </div>

              <div class="p-2 justify-end mb-5" >
                <h2 class="text-2xl font-semibold -mb-1 p-2 " style={{textAlign:"start", direction:"rtl"}}>قصة ,لتجربة فريدة...</h2>
                <p class="p-2" >نهدف لجعل كل مشروع قصة لتجربة لا تضاهى, نسعى لتحويل كل ثانية يقضيها المستخدم على منصتك, وقتاً مفيداً للجميع - و ايضاً ممتعاً - لتبقى انت و فريقك في اذهانهم لفترة طويلة!</p>
              </div>

              <div className="lg:flex justify-end item-end -pt-3 pb-28 mr-3 md:grid md:mr-0">
                    <button className="text-sm text-blue-400 w-40 h-10 rounded-full bg-white-400"> أخر مشروع منجز</button>
                    <button className="text-sm text-white w-56 h-10 rounded-full bg-blue-400">مشاهدة الفيديو التعريفي</button>
              </div>

            </div>

            <div className="mt-6 ">
                <div class="w-72 mx-auto rounded-md overflow-hidden shadow-md mb-8 " style={{backgroundColor:"#61B7EA"}}>

                  <div className="flex justify-end p-3 -mb-4">
                    <img class=" h-12 w-12 object-cover mt-2 mr-2" src={bagIcon} alt="Card Image" />
                  </div>

                  <div class="p-2 justify-end mb-5">
                    <h2 class="text-xl font-semibold -mb-1 p-2 text-white" style={{textAlign:"end"}}>الأحترافية و المهنية</h2>
                    <p class="text-gray-600 p-2 text-white">الطابع المهني و الاحترافية تسمو على جميع منتجاتنا و اعمالنا, و ايضا هي اولويتنا في جميع التعاملات, المشاريع و العقود.</p> 
                  </div>

                </div>
    
                <div class="w-72 mx-auto bg-white rounded-md overflow-hidden shadow-md mb-8 ">

                  <div className="flex justify-end p-3 -mb-4">
                    <img class=" h-12 w-12 object-cover mt-2 mr-2"  src={starsIcon} alt="Card Image" />
                  </div>

                  <div class="p-2 justify-end mb-5">
                    <h2 class="text-xl font-semibold -mb-1 p-2" style={{textAlign:"end"}}>الدقة والجودة</h2>
                    <p class="text-gray-600 p-2">نحن نضمن الدقة والجودة في كل تفاصيل تصميم المواقع الإلكترونية لضمان تحقيق أهدافك وتلبية توقعات عملائك بسهولة وسرعة.</p>      
                  </div>

                </div>
    
                <div class="w-72 mx-auto bg-white rounded-md overflow-hidden shadow-md mb-8 ">

                  <div className="flex justify-end p-3 -mb-4">
                    <img class=" h-12 w-12 object-cover mt-2 mr-2"  src={clientAssistanceIcon} alt="Card Image" />
                  </div>

                   <div class="p-2 justify-end mb-5">
                    <h2 class="text-xl font-semibold -mb-1 p-2" style={{textAlign:"end"}}> خدمة عملاء مستمرة</h2>
                    <p class="text-gray-600 p-2">نحن نفهم أهمية التواصل والاستجابة السريعة لاحتياجات عملائنا. سواء كنت تحتاج إلى دعم فني أو استشارة تقنية، فإن فريقنا دائمًا هنا للمساعدة.</p>      
                  </div>

                </div>
            </div>

             <div className="lg:-ml-28">
              
                <div class="w-72 mx-auto bg-white rounded-md overflow-hidden shadow-md mb-8 ">
                  
                  <div className="flex justify-end p-3 -mb-4">
                    <img class=" h-12 w-12 object-cover mt-2 mr-2" src={myPenIcom} alt="Card Image" />
                  </div>

                  <div class="p-2 justify-end mb-5">
                    <h2 class="text-xl font-semibold -mb-1 p-2" style={{textAlign:"end"}}>أبتكار و تصميم رائع</h2>
                    <p class="text-gray-600 p-2">نحن نجمع بين الإبداع والتصميم الاستثنائي لنقدم لك تجربة موقع إلكتروني فريدة تبرز علامتك التجارية بأفضل طريقة.</p>      
                  </div>

                </div>

                <div class="w-72 mx-auto rounded-md overflow-hidden shadow-md mb-8 " style={{backgroundColor:"#61B7EA"}}>

                  <div className="flex justify-end p-3 -mb-4">
                    <img class=" h-12 w-12 object-cover mt-2 mr-2" src={moneySignIcon} alt="Card Image" />
                  </div>

                  <div class="p-2 justify-end mb-5">
                    <h2 class="text-xl font-semibold -mb-1 p-2 text-white" style={{textAlign:"end"}}>أسعار تنافسية</h2>
                    <p class="text-gray-600 p-2 text-white">نحن نجمع بين أمان البيانات والاستدامة التكنولوجية لضمان أداء موقعك بثبات ونجاح, لن يكون عليك القلق حيال اي من الهجمات الألكترونية!</p> 
                  </div>

                </div>

            <div class="w-72 mx-auto bg-white rounded-md overflow-hidden shadow-md mb-8 ">
                  
                <div className="flex justify-end p-3 -mb-3">
                  <img class=" h-10 w-15 object-cover mt-2 mr-2" src={speedIcon} alt="Card Image" />
                </div>

                <div class="p-2 justify-end mb-5">
                  <h2 class="text-xl font-semibold -mb-1 p-2" style={{textAlign:"end"}}>سرعة الانجاز</h2>
                  <p class="text-gray-600 p-2">نحن نجمع بين أمان البيانات والاستدامة التكنولوجية لضمان أداء موقعك بثبات ونجاح, لن يكون عليك القلق حيال اي من الهجمات الألكترونية!</p>      
                </div>

               </div>

            </div>

         

            </div>
            </div>



            </div>
            
            {/* About Us Section */}

            <div className="bg-white">
              <div className="flex justify-center ">
              <img className="w-24 h-24 mt-10" src={boxImage} />
              
              </div>

              <div className="flex justify-center ">
              <h1 className="mt-7 -mr-3 text-4xl font-semibold"> عن شـــركتنا</h1>
              
              </div>

              <div className="flex justify-center flex items-center ">
              <p className="mt-7 -mr-3 text-md  longPara "> شركة "داخل الصندوق"  أو “In Box”هي مجموعة من المبدعين والمحترفين المختصين في تصميم وتطوير المواقع الإلكترونية وإنشاء منتجات رقمية استثنائية. نسعى جاهدين لتحقيق الإبداع والتميز في كل مشروع نقوم به، ونؤمن بأن التصميم والتكنولوجيا يمكن أن تلهم وتحدث تأثيرًا إيجابيًا.  إننا نجمع بين الإبداع والخبرة لتقديم حلول رقمية مخصصة تلبي احتياجات عملائنا بدقة وتساهم في تحقيق أهدافهم على الإنترنت. ادناه سترون ابرز اعضاء فريقنا و بعض المعلومات عنهم.</p>
              
              </div>

              <div className="flex pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 " style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%"}}>


              <div className="p-4">
                <img src={ahmed_pfp}  className="w-90" />
                <p className="text-2xl p-2"> أحمد علي: المدير التنفيذي </p>
              </div>
                
              <div className="p-4">
                <img src={abdullah_pfp}  className="w-90" />
                <p className="text-2xl p-2"> عبدالله ناصر: مسؤول فريق تصميم المواقع </p>
              </div>
             

              <div className="p-4">
                <img src={sara_pfp} className="w-90" />
                <p className="text-2xl p-2"> سارة محمد: مديرة المبيعات </p>
              </div>
  
              </div>

            </div>

            {/* Our Services Section */}

            <div style={{backgroundColor:"#F5FCFF"}}> 

 
              <h1 className=" text-4xl p-2 pt-7" style={{color:"#61B7EA"}}>الخـــدمـات</h1>

              <div className="flex justify-center servicesPara" style={{display:"flex", justifyContent:"center", margin: "0 auto"}}>
              <p color="#242424" style={{textAlign:"center", margin:"0 auto"}}>أدناه جميع الخدمات التي تقدمها شركتنا, يزداد عدد الخدمات التي نقدمها دوماً</p>
              </div>


              <div className=" pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-0 lg:ml-10" style={{paddingLeft: myPadding+"%", paddingRight:  myPadding+"%", margin:"0 auto"}}>
              <div style={{width: "250px", marginBottom: "40px"}} className="">

                  <div style={{position:"absolute"}}>
                    <img src={blurAppplication} className=" object-cover rounded-lg" style={{width:"250px"}}/>
                    <div className="blurDiv" style={{width:"100%", height:"100px", backgroundColor:"white" }}></div>
                  </div>

                  <div className="flex justify-center p-8 ">
                    <img src={appImage} style={{width: "161.3px"}}/>
                  </div>

                  <h1 className=" text-lg font-semibold"> أنشاء تطبيقات الهاتف </h1>

                  <div className="flex justify-center p-5 pt-3 ">
                    <p className="text-center text-sm" style={{zIndex:"2"}}> نقوم بتصميم و تنفيذ و اطلاق تطبيق هاتف من اجلك! على منصة اندرويد, ابل او كلاهما! </p>
                  </div>


                </div>

                <div style={{width: "250px", marginBottom: "40px"}}>

                  <div style={{position:"absolute"}}>
                    <img src={blurCApplication} className=" object-cover rounded-lg" style={{width:"250px"}}/>
                    <div className="blurDiv" style={{width:"100%", height:"100px", backgroundColor:"white"}}></div>

                  </div>

                  <div className="flex justify-center p-8 ">
                    <img src={CApplication} style={{width: "161.3px"}}/>
                  </div>

                  <h1 className=" text-lg font-semibold"> أنشاء التصاميم </h1>

                  <div className="flex justify-center p-5 pt-3 ">
                    <p className="text-center text-sm" style={{zIndex:"2"}}> نقوم بتصميم و تنفيذ و اطلاق تطبيق هاتف من اجلك! على منصة اندرويد, ابل او كلاهما! </p>
                  </div>

                </div>

                <div style={{width: "250px", marginBottom: "40px"}}>

                  <div style={{position:"absolute"}}>
                    <img src={blurWeb} className=" object-cover rounded-lg" style={{width:"250px"}}/>
                    <div className="blurDiv" style={{width:"100%", height:"100px", backgroundColor:"white"}}></div>
  
  
                  </div>

                  <div className="flex justify-center p-8 ">
                    <img src={Web} style={{width: "161.3px"}}/>
                  </div>

                  <h1 className=" text-lg font-semibold"> عمل تطبيقات الكمبيوتر </h1>

                  <div className="flex justify-center p-5 pt-3 ">
                    <p className="text-center text-sm" style={{zIndex:"2"}}> نقوم بتصميم و تنفيذ و اطلاق تطبيق هاتف من اجلك! على منصة اندرويد, ابل او كلاهما! </p>
                  </div>
                </div>

                <div style={{width: "250px", marginBottom: "40px"}}>

                  <div style={{position:"absolute"}}>
                    <img src={blurCWeb} className=" object-cover rounded-lg" style={{width:"250px"}}/>
                    <div className="blurDiv" style={{width:"100%", height:"100px", backgroundColor:"white"}}></div>


                  </div>

                  <div className="flex justify-center p-8 ">
                    <img src={CWeb} style={{width: "161.3px"}}/>
                  </div>

                  <h1 className=" text-lg font-semibold">المواقع الألكترونية </h1>

                  <div className="flex justify-center p-5 pt-3 ">
                    <p className="text-center text-sm" style={{zIndex:"2"}}> نقوم بتصميم و تنفيذ و اطلاق تطبيق هاتف من اجلك! على منصة اندرويد, ابل او كلاهما! </p>
                  </div>

                </div>

                <div style={{width: "250px", marginBottom: "40px"}}>

                  <div style={{position:"absolute"}}>
                    <img src={blurGraphic} className=" object-cover rounded-lg" style={{width:"250px"}}/>
                    <div className="blurDiv" style={{width:"100%", height:"100px", backgroundColor:"white"}}></div>
  
                  </div>

                  <div className="flex justify-center p-8 ">
                    <img src={Graphic} style={{width: "161.3px"}}/>
                  </div>

                  <h1 className=" text-lg font-semibold">تصميم الكرافيكس</h1>

                  <div className="flex justify-center p-5 pt-3 ">
                    <p className="text-center text-sm" style={{zIndex:"2"}}> نقوم بتصميم و تنفيذ و اطلاق تطبيق هاتف من اجلك! على منصة اندرويد, ابل او كلاهما! </p>
                  </div>

                </div>


                <div style={{width: "250px", marginBottom: "40px"}}>

                  <div style={{position:"absolute"}}>
                    <img src={blurMVP} className=" object-cover rounded-lg" style={{width:"250px"}}/>
                    <div className="blurDiv" style={{width:"100%", height:"100px", backgroundColor:"white"}}></div>
  
                  </div>

                  <div className="flex justify-center p-8 ">
                    <img src={mvp} style={{width: "161.3px"}}/>
                  </div>

                  <h1 className=" text-lg font-semibold">MVP تصميم </h1>

                  <div className="flex justify-center p-5 pt-3 ">
                    <p className="text-center text-sm" style={{zIndex:"2"}}> نقوم بتصميم و تنفيذ و اطلاق تطبيق هاتف من اجلك! على منصة اندرويد, ابل او كلاهما! </p>
                  </div>

                </div>

                <div style={{width: "250px", marginBottom: "40px"}}>

                  <div style={{position:"absolute"}}>
                    <img src={blurProject} className=" object-cover rounded-lg" style={{width:"250px"}}/>
                    <div className="blurDiv" style={{width:"100%", height:"100px", backgroundColor:"white"}}></div>
  
                  </div>

                  <div className="flex justify-center p-8 ">
                    <img src={project} style={{width: "161.3px"}}/>
                  </div>

                  <h1 className=" text-lg font-semibold"> خطط المشاريع الرقمية </h1>

                  <div className="flex justify-center p-5 pt-3 ">
                    <p className="text-center text-sm" style={{zIndex:"2"}}> نقوم بتصميم و تنفيذ و اطلاق تطبيق هاتف من اجلك! على منصة اندرويد, ابل او كلاهما! </p>
                  </div>

                </div>



              </div>


            </div>

        </div>
    )
}