// @flow

import { translate } from '../../base/i18n';
import { IconClosedCaption } from '../../base/icons';
import { connect } from '../../base/redux';
import { toggleLangugeSelectorDialog } from '../actions';

import {
    AbstractClosedCaptionButton,
    _abstractMapStateToProps
} from './AbstractClosedCaptionButton';

/**
 * A button which starts/stops the transcriptions.
 */
class ClosedCaptionButton
    extends AbstractClosedCaptionButton {
    accessibilityLabel = 'toolbar.accessibilityLabel.cc';
    icon = IconClosedCaption;
    tooltip = 'transcribing.ccButtonTooltip';
    label = 'toolbar.startSubtitles';
    labelProps = {
        language: this.props.t(this.props._language)
    };

    /**
     * Toggle language selection dialog.
     *
     * @returns {void}
     */
    _handleClickOpenLanguageSelector() {
        const { dispatch } = this.props;

        dispatch(toggleLangugeSelectorDialog());
    }
}

export default translate(connect(_abstractMapStateToProps)(ClosedCaptionButton));
