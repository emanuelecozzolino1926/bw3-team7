import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";


const LeftCards = function (){
     const [profileData, setProfileData] = useState(null);
       
      
        const apiUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
        const apiKey =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";
      
        const getBanner = () => {
          fetch(apiUrl, {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          })
            .then((response) => {
              if (response.ok) {
                console.log(`Collegato al server ${response.status}`);
                return response.json();
              } else {
                throw new Error(
                  `Errore nella connessione al server ${response.status}`
                );
              }
            })
            .then((data) => {
              setProfileData(data);
            })
            .catch((error) => {
              console.log(`Impossibile accedere al server ${error}`);
            });
        };
      
        useEffect(() => {
          getBanner();
        }, []);
   
    return(
<><div className="card  border border-secondary ms-4">
      <div className="img-container position-relative " style={{height:'100px'}}>
       <div style={{backgroundColor:'grey'}}>
        <img
          src={profileData?.image}
          alt="profile-img"
          id="pic"
          style={{ width: "80px", height: "80px" }}
          
        /></div>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center gap-5">
          <div>
            <div className="d-flex gap-2 align-items-center flex-wrap">
              <h5 className="card-title m-0 fs-2 mb-2">
                 {`${profileData?.name} ${profileData?.surname}`}
              </h5>
              <i className="bi bi-volume-up-fill fs-3 " ></i>
              <p className="m-0 text-muted">he/him</p>
            </div>
            <p className="card-text m-0">{profileData?.title}</p>
            <p className="card-text m-0 text-muted">
               {profileData?.area}
            </p>
          </div>
        </div>
        <p className="py-3">500+ connections</p></div></div></>
    )
};
export default LeftCards