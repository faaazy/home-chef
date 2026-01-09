import { useLoaderData, useNavigate } from "react-router-dom";
import "./Area.css";
import { Flag } from "lucide-react";

const AreaList = () => {
  const { meals } = useLoaderData();
  const navigate = useNavigate();

  console.log(meals);

  const areaClickHandler = (area) => {
    navigate(`/area/${area}`);
  };

  return (
    <section className="area-list">
      <div className="container">
        <h2 className="area-list__title">Area</h2>

        <div className="area-list__grid">
          {meals.map((area) => (
            <div
              onClick={() => areaClickHandler(area.strArea)}
              className="area-list__grid-item"
              key={area.strArea}
            >
              <Flag />
              <h4>{area.strArea}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaList;
