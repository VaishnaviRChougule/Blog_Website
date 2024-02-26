import React from "react";
import './write.css'
import { FaCirclePlus } from "react-icons/fa6"; 
import { useCart } from "react-use-cart";

const Write =(props)=>{

    const {addItem} = useCart();
   
    return(
<>
<div></div>
<div className="py-40 bg-black text-center text-white px-4">
        <h2 className="tex-5xl lg:text-7xl leading-snug font-bold mb-5">Create Blog. </h2>
            </div>

            <div className="write">

                <img src="https://st.depositphotos.com/1927453/1975/i/450/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg" alt="" className="writeimg" />

                <form className="writeform">
                    <div className="writeformgroup">
                        <label htmlFor="fileInput">
                            <i className="writeicon"><FaCirclePlus /></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                        <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                    </div>

                    <div className="">
                       
                    <input type="text" name="author" id="author" placeholder="Author Name" className="writeauthor" />
                        <input type="text" name="author" id="author" placeholder="Published Date" className="writedate"/>
                    </div>

                    <div className="writeformgroup">
                        <textarea type="text" placeholder="Tell Your Story..." className="writeInput writetext" id="" cols="30" rows="10"></textarea>

                    </div>

                    <button className="writesubmit" onClick={()=>addItem(props.items)}>publish</button>
</form>
            </div> 

        
</>

    )
}
export default Write;