import LandingWall from '@/components/Landing/LandingWall';
import { useLandingListQuery } from '@/querys/landingQuery';
import { Modal, Space } from 'antd';
import { useState } from 'react';

type LandingSelectModalProps = {
  value?: number;
  onChange?: (value: number) => void;
};
const LandingSelectModal = (props: LandingSelectModalProps) => {
  const [open, setOpen] = useState(false);
  const { data: landingList } = useLandingListQuery();

  if (!open) {
    return (
      <Space>
        {props.value && (
          <span>
            已选: {landingList?.find((it) => it.id === props.value)?.name}
          </span>
        )}
        <a onClick={setOpen.bind(null, true)}>选择</a>
      </Space>
    );
  }
  return (
    <Modal width={'80%'} open={true} onCancel={setOpen.bind(null, false)}>
      <LandingWall
        mode="select"
        onSelect={(v) => {
          props.onChange?.(v);
          setOpen(false);
        }}
      />
    </Modal>
  );
};

export default LandingSelectModal;
