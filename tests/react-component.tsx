import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";

const SomeComponent = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
});

SomeComponent.displayName = "SomeComponent";

export { SomeComponent };
