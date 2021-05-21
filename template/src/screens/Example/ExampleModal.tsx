import {Block, Button, Text} from '@components/base';
import {useModalController} from '@hooks';
import React from 'react';
import {Modal} from 'react-native';

const ExampleModal = () => {
  const {isVisible, showModal, hideModal} = useModalController({id: 'Modal_1'});

  return (
    <Block flex backgroundColor="white" padding={16}>
      <Text>ExampleModal</Text>
      <Button title="Show Modal" onPress={showModal} />
      <Modal
        visible={isVisible}
        animationType="slide"
        presentationStyle="pageSheet">
        <Text>Modal</Text>
        <Button title="Hide Modal" onPress={hideModal} />
      </Modal>
    </Block>
  );
};

export default ExampleModal;
