import "./app-info.css";

const AppInfo = ({increased,employees}) => {
     return (
        <div className="app-info">
            <h1>Ընկերությունում աշխատողների հաշվառում </h1>
            <h2>Աշխատակիցների ընդհանուր թիվը՝ {employees} </h2>
            <h2>Պարգևավճարը կստանա համար {increased} -ը</h2>
        </div>
     )}
     export default AppInfo;