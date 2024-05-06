import { Form, Input, message, Rate } from 'antd'
import { useFeedback } from '../hooks/useFeedback.ts'

import feedbackImg from '../../public/feedback.png'

export default function FeedbackSection() {
    const { sendFeedback } = useFeedback()
    const [ messageApi, contextHolder ] = message.useMessage()
    const [ form] = Form.useForm()

    function onFinish({ rating, ati, pikir }: { rating: number, ati: string, pikir: string }) {
        if (!rating || !ati || !pikir) return

        sendFeedback({
            id: Math.random().toString(),
            username: ati,
            rating: rating,
            text: pikir
        }, {
            onSuccess: () => {
                messageApi.success('pikiriniz jiberildi')
                form.resetFields()
            }
        })
    }

    return (
        <div className='feedback-section'>
            {contextHolder}
            <div>
                <h1 className='feedback-section-header'>Pikir bildiriw</h1>
                <Form
                    form={form}
                    name='comment'
                    onFinish={onFinish}
                    autoComplete='off'
                    className='feedback-section-form'
                >
                    <Form.Item
                        name='rating'
                        rules={[
                            {
                                required: true,
                                message: 'reyting kiritiń',
                            }
                        ]}
                    >
                        <Rate style={{ color: '#ff9e30' }} />
                    </Form.Item>

                    <Form.Item
                        name='ati'
                        rules={[
                            {
                                required: true,
                                message: 'Atıńızdı kiritiń',
                            }
                        ]}
                    >
                        <Input placeholder='atiniz'  />
                    </Form.Item>

                    <Form.Item
                        name='pikir'
                        rules={[
                            {
                                required: true,
                                message: 'pikirinizdı kiritiń',
                            }
                        ]}
                    >
                        <Input.TextArea rows={8} placeholder='pikiriniz' />
                    </Form.Item>

                    <Form.Item>
                        <button className='feedback-btn'>
                            Jollaw
                        </button>
                    </Form.Item>
                </Form>
            </div>
            <img src={feedbackImg} alt='feedback' className='feedback-section-img'/>
        </div>
    )
}

