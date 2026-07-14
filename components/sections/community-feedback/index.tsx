const feedbackColumns = [
  [
    {
      text: "Thanks to GDG Noida, I found the direction and inspiration to follow my passion.",
      backgroundColor: "#FFF2CC",
    },
    {
      text: "Thanks to GDG Noida, I've improved my analytical thinking and task management skills and landed great opportunities.",
      backgroundColor: "#FFE4E4",
    },
  ],

  [
    {
      text: "Thanks to GDG Noida, I've improved my analytical thinking and task management skills and landed great opportunities.",
      backgroundColor: "#FFE4E4",
    },
    {
      text: "I am grateful to Devfest Noida for providing me with this opportunity to connect with great designers.",
      backgroundColor: "#E1F5E8",
    },
  ],

  [
    {
      text: "I'll never forget speaking at the Women's Day event, connected with lot's of amazing women and listened many inspiring stories. #DareToBe.",
      backgroundColor: "#E5EEFC",
    },
    {
      text: "GDG Noida introduced me to open-source tech communities.",
      backgroundColor: "#FFF2CC",
    },
  ],
];

export default function CommunityFeedback() {
  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-4xl font-normal tracking-tight text-black md:text-5xl lg:text-6xl">
          Community <span className="font-bold">feedback</span>
        </h2>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {feedbackColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-5">
              {column.map((feedback, feedbackIndex) => (
                <div
                  key={feedbackIndex}
                  className={`rounded-2xl px-6 py-7 ${
                    columnIndex === 2 && feedbackIndex === 1
                      ? "md:mt-auto"
                      : ""
                  }`}
                  style={{
                    backgroundColor: feedback.backgroundColor,
                  }}
                >
                  <p className="text-base leading-relaxed text-black">
                    {feedback.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}