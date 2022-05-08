import Modal from 'antd/lib/modal/Modal';
import { Typography } from 'antd';

import { ModalProps } from '../../interface';
import './modal.css';

const DetailModal = ({ visible, footer, detail, onClose }: ModalProps) => {
    return (
        <Modal visible={visible} footer={footer} title={`Data for ${detail.name}`} onCancel={onClose}>
            <div className='detail'>
                <Typography.Title>
                    Name:
                </Typography.Title>
                <Typography.Title level={2}>
                    {detail.name}
                </Typography.Title>
            </div>
            <div className='detail'>
                <Typography.Title>
                    Gender:
                </Typography.Title>
                <Typography.Title level={2}>
                    {detail.gender}
                </Typography.Title>
            </div>
            <div className='detail'>
                <Typography.Title>
                    Status:
                </Typography.Title>
                <Typography.Title level={2}>
                    {detail.status}
                </Typography.Title>
            </div>    
            <div className='detail'>
                <Typography.Title>
                    Location:
                </Typography.Title>
                <Typography.Title level={2}>
                    {detail.location.name}
                </Typography.Title>
            </div>
            
        </Modal>
    )

}

export default DetailModal;