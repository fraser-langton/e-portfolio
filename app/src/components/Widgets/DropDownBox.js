import React, { useEffect, useState } from "react";
import "../../styles/ePortfolio-popup.css";
import { isAuthorized } from "../../util/cookies";

export default function DropDownBox(props) {
  const Auth = isAuthorized();

  const [widgetTypes, setWidgetTypes] = useState([]);
  useEffect(() => {
    async function fetchWidgetTypes() {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + Auth,
        },
      };
      const response = await fetch("/api/widget/types", requestOptions);
      const data = await response.json();
      setWidgetTypes(data);
    }
    fetchWidgetTypes();
  }, [Auth]);

  return (
    <div>
      <select
        className="DropDown"
        name="types"
        id="pavle"
        onChange={props.onChange}
        value={props.value}
      >
        {widgetTypes.map((widgetType) => (
          <option
            key={widgetType.type}
            className="nani"
            value={widgetType.type}
          >
            {widgetType.type}
          </option>
        ))}
      </select>
    </div>
  );
}
