import "../slider/textslider.scss";
import comma from "../images/coma.png";
const TextSlider = () => {
  const texts = [
    { text: "مردم در خواباند وقتى كه بميرند، بيدار مى شوند.", id: 1 },
    {
      text: "روزه دار ـ مادامى كه غيبت مسلمانى را نكرده باشد ـ همواره در عبادت است، .",
      id: 2,
    },
    { text: "مردم در خواباند وقتى كه بميرند، بيدار مى شوند.", id: 3 },
  ];
  return (
    <div className="text-slider">
      <img width={40} src={comma} alt="" />
      {texts.map((item) => {
        let classcss = `item-${item.id}`;
        return (
          <p key={item.id} className={classcss}>
            {item.text}
          </p>
        );
      })}
      <img width={40} src={comma} alt="" />
    </div>
  );
};

export default TextSlider;
