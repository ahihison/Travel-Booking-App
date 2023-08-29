"use client";
import useRentModal from "@/app/hooks/useRentModal";
import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Heading from "../Heading";
import CategoryInput from "../inputs/CategoryInput";
import { categoriesList } from "../navbar/Categories";
import Modal from "./Modal";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}
const RentModal = () => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);
  const onNext = () => {
    setStep((value) => value + 1);
  };
  const onBack = () => {
    setStep((value) => value - 1);
  };
  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);
  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathRoomCount: 1,
      imageSrc: "",
      title: "",
      description: "",
      price: 1,
    },
  });
  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of the best describes your place?"
        subtitle="Pick a category"
      />
      <div className="grid gird-cols-1 md:grid-cols-2 gap-3 max-w-[50wh] overflow-y-auto max-h-[50vh]">
        {categoriesList.map((item) => (
          <div className="col-span-1" key={item.label}>
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              icon={item.icon}
              label={item.label}
              selected={category == item.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        title="Airbnb your home"
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        body={bodyContent}
      />
    </div>
  );
};

export default RentModal;
