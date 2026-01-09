import VideoSection from "./components/VideoSection";
// in video sections it's better to use descriptions under 35 words
import ImageSection from "./components/ImageSection";
import shevalekPortrait from "./assets/shevalek.jpeg";

export default function Home() {
  return (
    <>
      <main>
        <VideoSection
          videoSrc="/thunder.mov"
          sectionName=""
          sectionHeader="Галерея"
          description={[
            "На небо мною брошена,",
            <br key={"br1"} />,
            "Янтарная горошина -",
            <br key={"br2"} />,
            "Признание в любви...",
          ]}
          linkHref="/photos"
          linkHeader="Лови ее, лови!"
        />
        <ImageSection imageSrc={shevalekPortrait} links />
        <VideoSection
          videoSrc="/airplane.mov"
          sectionName=""
          sectionHeader="Поэзия"
          description={[
            "Тобою обнаружена",
            <br key={"br1"} />,
            "Волшебная жемчужина",
          ]}
          linkHref="/notes"
          linkHeader="Лови ее, лови!"
        />
      </main>
    </>
  );
}
