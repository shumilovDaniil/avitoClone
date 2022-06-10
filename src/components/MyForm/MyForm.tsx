import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAdvertFormFields } from "../../types/advertForm.interface";
import { ICard } from "../../types/types";
import Title from "../ui/Title";
import { Button, Form, Modal } from "react-bootstrap";

interface AdvertFormProps {
  createCard: (card: ICard) => void;
}

export const MyForm: FC<AdvertFormProps> = ({ createCard }) => {
  const { register, handleSubmit, reset } = useForm<IAdvertFormFields>();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const onSubmit: SubmitHandler<IAdvertFormFields> = (data) => {
    const card: ICard = {
      id: Date.now(),
      title: data.title,
      price: data.price,
    };
    createCard(card);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
        <form onSubmit={handleSubmit(onSubmit)} className={""}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Title>Параметры</Title>

            <div className={"mb-5"}>
              <label htmlFor={"title"} className={"mr-8 text-xl text-gray-400"}>
                Название объявления
              </label>
              <input
                id={"title"}
                {...register("title")}
                required={true}
                className={"p-2 border"}
                type="text"
              />
            </div>

            <div className={"flex mb-5"}>
              <label className={"mr-8 text-xl text-gray-400"}>Состояние</label>
              <div>
                <div className={"flex"}>
                  <input
                    {...register("condition", { required: true })}
                    type="radio"
                    value="new"
                    className={"mr-2"}
                    id={"cond1"}
                  />
                  <label htmlFor={"cond1"}>Новое</label>
                </div>

                <div className={"flex"}>
                  <input
                    {...register("condition", { required: true })}
                    type="radio"
                    value="great"
                    className={"mr-2"}
                    id={"cond2"}
                  />
                  <label htmlFor={"cond2"}>Отличное</label>
                </div>
                <div className={"flex"}>
                  <input
                    {...register("condition", { required: true })}
                    type="radio"
                    value="good"
                    className={"mr-2"}
                    id={"cond3"}
                  />
                  <label htmlFor={"cond3"}>Хорошее</label>
                </div>
                <div className={"flex"}>
                  <input
                    {...register("condition", { required: true })}
                    type="radio"
                    value="soso"
                    className={"mr-2"}
                    id={"cond4"}
                  />
                  <label htmlFor={"cond4"}>Удовлетворительное</label>
                </div>
                <div className={"flex"}>
                  <input
                    {...register("condition", { required: true })}
                    type="radio"
                    value="need-repair"
                    className={"mr-2"}
                    id={"cond5"}
                  />
                  <label htmlFor={"cond5"}>Требуется ремонт</label>
                </div>
              </div>
            </div>

            <div className={"mb-5"}>
              <label className={"mr-8 text-xl text-gray-400"}>
                Вид объявления
              </label>
              <select
                className={"border p-1"}
                {...register("type", { required: true })}
              >
                <option value="">...</option>
                <option value="sell-mine">Продаю своё</option>
                <option value="bought-for-sale">Купил на продажу</option>
              </select>
            </div>

            <div className={"flex flex-col mb-5"}>
              <label
                htmlFor={"specific"}
                className={"mr-8 text-xl text-gray-400"}
              >
                Характеристики
              </label>
              <input
                id={"title"}
                {...register("specifications.producer")}
                required={true}
                className={"p-2 border"}
                type="text"
                placeholder={"Производитель"}
              />
              <input
                id={"title"}
                {...register("specifications.model")}
                required={true}
                className={"p-2 border"}
                type="text"
                placeholder={"Модель"}
              />
            </div>

            <div className={"flex flex-col mb-5"}>
              <label
                htmlFor={"description"}
                className={"mr-8 text-xl text-gray-400"}
              >
                Описание
              </label>
              <textarea
                id={"description"}
                {...register("details.description")}
                required={true}
                className={"p-2 border"}
                placeholder={"Описание объявления"}
              />

              <label
                htmlFor={"photos"}
                className={"mr-8 text-xl text-gray-400"}
              >
                Фотографии
              </label>
              <input
                id={"videoLink"}
                {...register("details.photos")}
                required={true}
                className={"p-2 border"}
                type={"file"}
                placeholder={"Фотографии"}
              />

              <label
                htmlFor={"videoLink"}
                className={"mr-8 text-xl text-gray-400"}
              >
                Видео
              </label>
              <input
                id={"videoLink"}
                {...register("details.videoLink")}
                required={true}
                className={"p-2 border"}
                type={"text"}
                placeholder={"Ссылка на видео"}
              />
            </div>

            <div className={"flex flex-col mb-5"}>
              <label
                htmlFor={"videoLink"}
                className={"mr-8 text-xl text-gray-400"}
              >
                Цена
              </label>
              <input
                id={"videoLink"}
                {...register("price")}
                required={true}
                className={"p-2 border"}
                type={"text"}
                placeholder={"Цена"}
              />
            </div>

            {/*<div>*/}
            {/*  <button className={"p-2 bg-gray-200 mr-4 mt-5"}>*/}
            {/*    Сохранить и выйти*/}
            {/*  </button>*/}
            {/*  <button className={"p-2 bg-cyan-400 text-white"}>*/}
            {/*    Продолжить*/}
            {/*  </button>*/}
            {/*</div>*/}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type={"submit"}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      <Title>Создать объявление</Title>
    </div>
  );
};
