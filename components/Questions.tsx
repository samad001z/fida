/*
  The questions people actually ask at the counter, answered plainly.

  Built on the native <details> element rather than on React state, which means
  the keyboard behaviour, the screen reader announcements and the browser's own
  find-in-page all work without a line of JavaScript. The opening and closing is
  animated in globals.css through ::details-content, so this stays a Server
  Component and ships no client bundle at all.
*/

const questions: [string, string][] = [
  [
    'Can I get something stitched if I cannot come to the shop?',
    'Yes. Send us a photograph of the garment you like on WhatsApp and we will send back the fabric options we have in that style. For the fit, measure a suit that already fits you well and send us those numbers. We will call you once to check two or three of them before cutting, because a shoulder measured over a loose kurta is usually wrong by an inch.',
  ],
  [
    'How long does an order take?',
    'Plain stitching is ready in about ten days. Anything with hand work on it, zardozi, gota patti, chikankari or mirror, runs three to five weeks depending on how much of the garment is covered. Wedding orders need six weeks, and more than that between October and February. We tell you the date before you leave a deposit, and we do not move it afterwards.',
  ],
  [
    'Do you alter clothes bought somewhere else?',
    'We do, for fit. Taking in a waist, shortening a hem, reworking a blouse that came with a saree, all of that is routine and usually costs a few hundred rupees. We will not add new work to somebody else’s garment or copy a design from another label, so please do not bring a photograph of one and ask for it.',
  ],
  [
    'What does it cost to have something made?',
    'Stitching alone starts at 1,800 rupees for a kurta and salwar and 2,500 for a blouse. If we are also supplying the fabric and the work, the price depends entirely on what you choose, so the honest answer is that we will quote you in the shop or over WhatsApp once we know the fabric. Nothing is charged before you have seen the number.',
  ],
  [
    'Do you take a deposit, and can I return something?',
    'Half the amount at the time of order, the rest when you collect. Ready to wear pieces can be exchanged within seven days if the tags are still on and it has not been worn. Anything cut to your measurements cannot be returned, for the obvious reason, but the first alteration after delivery is free if the fit is not right.',
  ],
  [
    'Where do I park?',
    'Parking details are shared when your appointment is confirmed.',
  ],
];

export function Questions() {
  return (
    <ul className="mt-12 border-t border-rule">
      {questions.map(([question, answer]) => (
        <li key={question} className="border-b border-rule">
          <details className="group/q">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.05rem] leading-snug transition-colors duration-200 hover:text-indigo sm:text-[1.12rem]">
              {question}
              <span
                aria-hidden="true"
                className="marker mt-1 shrink-0 text-[1.35rem] leading-none text-indigo"
              >
                +
              </span>
            </summary>
            <p className="max-w-[62ch] pb-7 text-[1rem] leading-[1.7] text-mute">{answer}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}
