/*
  Next remounts this file on every navigation, which makes it the one place a
  route transition can live without a router listener or an animation library.
  The class is defined in globals.css and is off under reduced motion.
*/
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="enter">{children}</div>;
}
