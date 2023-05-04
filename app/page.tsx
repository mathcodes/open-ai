import {
  EyeIcon,
} from "@heroicons/react/24/outline";

async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-[#fefecb] px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <EyeIcon className="h-8 w-8" />
            <h2>More</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">AI Weather App - Coming soon"</p>
            <p className="infoText">
              AI Helper Bot - Coming soon...
            </p>
            <p className="infoText">
            AI Text Summarization - Coming soon...
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <EyeIcon className="h-8 w-8" />
            <h2>Language</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
            AI Image Generation - Coming soon...
              </p>
            <p className="infoText">
            AI Text Generation - Coming soon...
            </p>
            <p className="infoText">
              AI Voice Assistant - Coming soon...
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <EyeIcon className="h-8 w-8" />
            <h2>Models</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              AI Song Generation - Coming soon...
            </p>
            <p className="infoText">
            AI Study Buddy - Coming soon...
            </p>
            <p className="infoText">
            AI Gaming Bot - Coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
