import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-lg">Food is just click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Pobierz aplikacje warzywnik na swoj telefon!
          </span>
          <span>
            Zarzadzaj swoim warzywnikiem przy pomocy aplikacji juz dziś
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};
