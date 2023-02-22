import { useNavigate} from "react-router-dom"
import "./postcard.css"

const Postcard=()=>{
const url="https://instaclone5.onrender.com"
const navigate=useNavigate()
   
    return (
        <><div className="card-container1">
<form className="value-inputs" encType="multipart/form-data" onSubmit={(e)=>{
    const UserData=new FormData()
    e.preventDefault()
    UserData.append("name",e.target.name.value)
    UserData.append("location",e.target.location.value)
    UserData.append("description",e.target.description.value)
    UserData.append("likes",Math.ceil(Math.random() * 100))
    if (e.target.image.files.length > 0) {
   UserData.append("image", e.target.image.files[0]);
}
    fetch(`${url}/post`,{
        method:"Post",
        body:UserData,
    }).then((res)=>res.json()).then((result)=>{
console.log(result)
    })
   navigate("/postview")
}}>
    <input type="file" name="image" className="file-name"/>
    <input type="text" name="name" placeholder="Name" className="name"/>
    <input type="text" name="location" placeholder="Location" className="location"/>
    <input type="text" name="description" placeholder="Description" className="description"/>
    <input type="submit" value="Submit" className="upload-post" />
    
</form>
        </div>

        </>
    )
}
export default Postcard
