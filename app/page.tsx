import VideoSection from "./components/VideoSection";
// in video sections it's better to use descriptions under 35 words
import ImageSection from "./components/ImageSection";
import shevalekPortrait from "./assets/shevalek.jpeg";

export default function Home() {
  return (
    <>
      <main>
        <VideoSection
          videoSrc="./thunder.mov"
          sectionName="описание раздела"
          sectionHeader="Алеша - Галоша"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit officia totam omnis saepe vero, blanditiis neque ducimus nemo adipisci accusamus consectetur inventore, natus qui deserunt voluptatem, expedita commodi corporis aliquid."
          linkHref="/"
          linkHeader="Домашняя"
        />
        <ImageSection imageSrc={shevalekPortrait} links />
        <VideoSection
          videoSrc="./airplane.mov"
          sectionName="описание раздела"
          sectionHeader="Алеша - Галоша"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit officia totam omnis saepe vero, blanditiis neque ducimus nemo adipisci accusamus consectetur inventore, natus qui deserunt voluptatem, expedita commodi corporis aliquid."
          linkHref="/"
          linkHeader="Домашняя"
        />
      </main>
    </>
  );
}
