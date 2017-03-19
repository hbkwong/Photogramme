import { connect } from 'react-redux';
import { requestPhotos, requestPhoto, addPhoto, deletePhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapDispatchToProps = (dispatch) => (
  {
    addPhoto: photo => dispatch(addPhoto(photo))
  }
);

export default connect(
  null,
  mapDispatchToProps
)(PhotoForm);
