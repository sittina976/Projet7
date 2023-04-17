import Article from "../../components/Article/article";
import { getDatas } from "../../utils/fonction/fonctions";
import { useState, useEffect } from "react";
import "../../assets/style.css";
import "./AproposPage.css"

function  APropos() {
  console.log("666");

  const [datas, setDatas] = useState([]);
console.log(datas);
  useEffect(() => {
    async function fetchDatas() {
      const datas = await getDatas();
      setDatas(datas);
    }
    fetchDatas();
  }, []);

  console.log(datas.title);
  return (

    <main>
    <img className="photo" src={require("../../assets/img_apropos.png")} alt="" />
    <section>
      <article>
       {datas.map((data) => {
        return (
        <Article 
         className="detail"
          title={data.title}
          content={data.content}
          direction="up" 
        />
        )
       
       })}
        
      </article>
    </section>
  </main>
  );
}

export default APropos;
