import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: { "App-Id": "636cdfa0ef714b68b27e5ee0" },
      })
      .then((res) => {
        console.log(res.data.data);
        setResult(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>POST PAGE</h1>
      {result.map((item,index)=>(
        <Link to={`/details/${item.id}`}>
        <div className="detials_card" key={index}>
          <p>
            <h1>
            {item.id}
            </h1>
          </p>
          <img className="img-fluid" height="auto" width="100%" src={item.image} alt="" />
          <p>
            <h2>
            {item.owner.title} {item.owner.firstName} {item.owner.lastName}
            </h2>
            </p>
        </div>
        </Link>
      ))}
    </>
  );
};

export default Header;
