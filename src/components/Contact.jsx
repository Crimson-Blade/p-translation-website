import React from "react"
import { Form, Input, InputNumber, Button } from "antd"

const Contact = () => {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  }

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  }
  /* eslint-enable no-template-curly-in-string */

  const onFinish = values => {
    console.log(values)
  }
  return (
    <div className="w-full flex max-md:flex-col py-10 px-52 justify-center gap-4 h-[700px] ">
      <div className="inline-block bg-slate-100 w-1/2 rounded-xl h-full">
        <h1 className="text-center font-semibold w-full">
          Online Inquiry Form
        </h1>
        <p className="text-center w-full">Fill out the Form!</p>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
            gap: 10,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button
              className="border-2 border-blue-400 text-blue-400"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="inline-block px-12 w-1/2 rounded-xl justify-evenly h-full bg-slate-100">
        <div className="h-1/5 ">
          <h3 className=" font-semibold w-full mb-0">Contact Us</h3>
          <h1 className="font-normal mb-0">
            Get In Touch <span className="font-semibold ">With US</span>
          </h1>
        </div>
        <div className="h-4/5 flex flex-col justify-evenly">
          <div className="flex w-full gap-6">
            <div className="border rounded-lg border-green-300 w-1/2 p-4 font-semibold text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="inline pr-2 mx-auto"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              Call Us
              <p className="border-green-300 border-dotted border-b-2  text-green-500 font-normal mb-0 pt-2">
                91 9820076435
              </p>
            </div>
            <div className="border rounded-lg border-green-300 w-1/2 p-4 font-semibold text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="inline pr-2 mx-auto"
              >
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              Business Hours
              <p className="border-green-300 border-dotted border-b-2  text-green-500 font-normal mb-0 pt-2">
                9am to 7pm
              </p>
            </div>
          </div>
          <div className="border rounded-lg border-green-300 w-full p-4 font-semibold text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="inline pr-2 mx-auto"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            Our Email
            <p className=" font-normal text-green-500 mb-0 pt-2">
              lifekshell@gmail.com
            </p>
          </div>
          <div className="border rounded-lg border-green-300 w-full p-4 font-semibold text-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              className="inline pr-2 mx-auto"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            Our Location
            <p className=" font-normal mb-0 pt-2">
              Platinum Venecia, 06, 1st Floor, Plot: 22 & 23, Sector: 29, Nerul,
              Navi Mumbai – 400706, Maharashtra, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
