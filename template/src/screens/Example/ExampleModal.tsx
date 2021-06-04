import {Alert, Block, Button, Text} from '@components/base';
import {useModalController} from '@hooks';
import {closeAlert, showAlert} from '@store/actions-types/modal';
import React from 'react';
import {Modal} from 'react-native';
import {useDispatch} from 'react-redux';

const ExampleModal = () => {
  const dispatch = useDispatch();
  const modalState = useModalController({id: 'Modal_1'});
  const alertState = useModalController({
    id: 'Alert_popup',
  });

  const _showAlert = () => {
    dispatch(
      showAlert({
        title: 'Example Alert',
        message: 'Message odf ',
        buttons: [
          {text: 'Cancel', onPress: () => dispatch(closeAlert())},
          {text: 'Submit'},
        ],
        options: {cancelable: true},
      }),
    );
  };

  return (
    <Block flex backgroundColor="white" padding={16}>
      <Text>Alert</Text>
      <Button title="Show Alert" onPress={_showAlert} />
      <Block height={24} />
      <Text>Modal Controller</Text>
      <Button title="Show Modal" onPress={modalState.show} />
      <Modal
        visible={modalState.isVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={modalState.hide}
        onDismiss={modalState.remove}>
        <Block padding={16}>
          <Text fontType="bold" size={16} center>
            Modal Example
          </Text>
          <Block height={24} />
          <Button
            title="Show Alert In Modal"
            onPress={() => {
              alertState.show({message: 'Alert in modal'});
            }}
          />
          <Block height={24} />
          <Button title="Hide Modal" onPress={modalState.hide} />
          <Modal transparent visible={alertState.isVisible}>
            <Alert
              title="Alert title"
              message="Original Message"
              buttons={[{text: 'Cancel', onPress: alertState.remove}]}
              {...alertState.customProps}
            />
          </Modal>
        </Block>
      </Modal>
    </Block>
  );
};

export default ExampleModal;
