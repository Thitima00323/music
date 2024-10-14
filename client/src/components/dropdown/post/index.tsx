"use client";

import { useError, usePostDropDown } from "@state/store/post";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import Form from "./form";
import { AnimatePresence, motion } from "framer-motion";
import { popUpAnimate } from "@animation/popup";
import { fadeUpAnimate } from "@animation/fade";
import Alert from "@component/alert/validate";

const PostDropDown = () => {
  const postDropDownState = usePostDropDown();
  const { error, success } = useError((state) => state.state);

  return (
    <>
      {error && (
        <Alert className="bg-red-400" open={error ? true : false}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-400" open={success}>
          Uploaded !
        </Alert>
      )}
      <AnimatePresence>
        {postDropDownState.open && (
          <motion.nav
            variants={popUpAnimate}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="fixed top-[50%] left-[50%] max-h-[85vh] overflow-y-auto w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none pb-8 z-[120]"
          >
            <article>
              <header className="flex justify-between items-center ">
                <section>
                  <motion.div
                    variants={fadeUpAnimate}
                    className="flex justify-start items-center gap-2"
                  >
                    <p className="text-lg">Post Music</p>
                    <BsMusicNoteBeamed size={15} />
                  </motion.div>
                  <motion.p variants={fadeUpAnimate} className="text-stone-700">
                    Post a song and be a creator of p3music.
                  </motion.p>
                </section>
                <GrFormClose
                  size={25}
                  className="absolute top-[10px] right-[10px] cursor-pointer"
                  onClick={() => postDropDownState.onPressedOpenPost()}
                />
              </header>

              <motion.main variants={fadeUpAnimate} className="w-full mt-8">
                <Form
                  step={postDropDownState.step}
                  onPressedChangeStep={postDropDownState.onPressedChangeStep}
                />
              </motion.main>
            </article>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default PostDropDown;
