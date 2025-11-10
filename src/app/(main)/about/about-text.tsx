"use client";

// import { useRouter, redirect } from "next/navigation";

export default function AboutText() {
  // const router = useRouter();

  function handleClick() {
    // router.push("/");
    // router.replace("/about");
    // router.refresh();
    // try {
    //   redirect("/");
    // } catch (e) {
    //   console.log(e);
    // }
  }

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        voluptatem mollitia autem quia cupiditate consequuntur repellendus
        quaerat numquam impedit. Consectetur, mollitia! Sit maiores alias
        voluptatibus eveniet sed similique aspernatur quos porro debitis sint ad
        molestiae, ea quam!
      </p>
      <button onClick={handleClick}>Click to navigate</button>
    </>
  );
}
