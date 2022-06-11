import PredictionPage from "../pages/predictionPage";
import InfoPage from "../pages/infoPage";

const navList = [
  {
    path: "/",
    title: "Count Crowd",
    element: <PredictionPage />,
  },
  {
    path: "/detail",
    title: "Project Detail",
    element: <InfoPage />,
  },
];

export default navList;
