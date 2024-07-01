import { useBoolean, useRequest } from 'ahooks';
import { Modal as AntdModal, ModalProps } from 'antd';
import React, { ReactElement } from 'react';

interface YModalAction {
  close: () => void;
  ok?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  refresh: () => void;
}

interface YModalProps<T extends any> extends Omit<ModalProps, 'children'> {
  request?: (options?: any) => Promise<T>;
  children: (
    data: T,
    action: YModalAction,
  ) => React.ReactElement | ReactElement;
  trigger: React.ReactElement;
}

const defaultRequest = async (): Promise<any> => {};

function YModal<T>({ request, ...props }: YModalProps<T>) {
  // 模态框可见性
  const [visible, { setFalse: closeModal, setTrue: openModal }] = useBoolean(
    props.open || false,
  );

  const { data, loading, run, refresh } = useRequest(
    request || defaultRequest,
    {},
  );

  const onModalOpen = async () => {
    openModal();
    if (request) {
      run();
    }
  };
  const trigger = React.cloneElement(props.trigger, { onClick: onModalOpen });
  return (
    <>
      {trigger}
      <AntdModal
        {...props}
        open={visible}
        loading={loading}
        onCancel={closeModal}
      >
        {typeof props.children === 'function'
          ? props.children(data, {
              close: closeModal,
              ok: props.onOk,
              cancel: props.onCancel,
              refresh,
            })
          : props.children}
      </AntdModal>
    </>
  );
}

export default YModal;
