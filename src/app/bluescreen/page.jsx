import QrSvg from "@wojtekmaj/react-qr-svg";

const Custom404 = () => {
  return (
    <>
      <main className="bg-blue-600 min-h-screen min-w-4 px-32">
        <div>
          <p className="text-slate-50 text-[250px]">:(</p>
          <p className="text-slate-50 text-4xl font-extralight">
            Your PC ran into a problem and needs to restart as soon as We're
            finished collecting some error info. Yahahha tapi boong boksuuu
          </p>
          <p className="py-8 text-slate-50 font-extralight text-4xl">
            69% complete
          </p>
        </div>
        <div className="flex mt-20">
          <div className="w-1/12">
            <QrSvg value="yahahahah kena frenk kamu" />
          </div>
          <div className="w-10/12 px-5">
            <p className="text-slate-50 text-xl font-extralight">
              For more info about this issue and possible fixes, visit
            </p>
            <p className="text-slate-50 text-xl font-extralight">
              https://support.microsoft.com/windows/contact-support-08877773-b0c0-469f-8af5-1f39e054df89
            </p>

            <p className="mt-10 text-slate-50 text-xl font-extralight">
              contact our support team if the issue persists.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Custom404;
