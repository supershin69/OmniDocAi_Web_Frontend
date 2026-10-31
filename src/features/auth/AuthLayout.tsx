import { Outlet } from "react-router";
import { Brand } from "../../components/Brand";
import { TypeAnimation } from "react-type-animation";

function AuthLayout() {
  return (
    <div className="flex h-screen">
      <section className="hidden md:flex md:flex-1 h-full bg-primary text-primary-foreground">
        <div className="flex flex-col h-full py-16 px-16 lg:px-20 xl:px-36">
          <Brand />
          <div className="flex-1 flex flex-col justify-center items-start gap-2">
            <p className="text-xs tracking-widest font-semibold text-muted">
              DOCUMENT INTELLIGENCE
            </p>
            <h1 className="text-white text-6xl font-semibold">
              <TypeAnimation
                sequence={["Turn every page into something you can use."]}
                wrapper="span"
                speed={50}
                cursor={false}
                repeat={0}
              />
            </h1>
            <p className="text-sm font-semibold text-muted">
              Extract text, refine it side by side, and listen to your
              documents—all in one focused workspace.
            </p>
          </div>
          <div className="flex border-t border-white pt-6">
            <span className="font-serif text-5xl leading-none text-muted">
              “
            </span>
            <p className="ml-2">
              Your document, from pixels to meaning to voice.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-1 h-full justify-center items-center px-4">
        <Outlet />
      </section>
    </div>
  );
}
export default AuthLayout;
