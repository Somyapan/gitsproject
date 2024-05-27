import { Link, useNavigate, useParams } from "react-router-dom";

const ExtraPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const name=slug.split('-').join(" ")
  return (
    <div className="min-h-screen w-full p-8">
      <div className="flex items-center gap-5">
        <Link to="/" className="text-lg font-bold hobver:underline underline-offset-1">
          Go to Home
        </Link>
        <button className="text-lg font-bold hobver:underline underline-offset-1" onClick={()=>navigate(-1)}>Back</button>
      </div>
      <div className="w-full h-60 flex items-center justify-center">
        <p className="font-bold text-3xl capitalize"> {name}</p>
      </div>
    </div>
  );
};

export default ExtraPage;
