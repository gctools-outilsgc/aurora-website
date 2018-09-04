import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../node_modules/reactstrap/src/utils';

const propTypes = {
    'aria-label': PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    next: PropTypes.bool,
    previous: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
    tag: 'a',
};

const PaginationLinkPrev = (props) => {
    let {
        className,
        cssModule,
        next,
        previous,
        tag: Tag,
        ...attributes
    } = props;

    const classes = mapToCssModules(classNames(
        className,
        'page-link'
    ), cssModule);

    let defaultAriaLabel = 'Previous';

    const ariaLabel = props['aria-label'] || defaultAriaLabel;

    let defaultCaret = '\u00ab';

    let children = props.children;
    if (children && Array.isArray(children) && children.length === 0) {
        children = null;
    }

    if (!attributes.href && Tag === 'a') {
        Tag = 'button';
    }

    children = [
        <span
            aria-hidden="true"
            key="caret"
        >
            {children || defaultCaret}
        </span>,
        <span
            className="sr-only"
            key="sr"
        >
            {ariaLabel}
        </span>,
    ];

    return (
        <Tag
            {...attributes}
            className={classes}
            aria-label={ariaLabel}
        >
            {children}
        </Tag>
    );
};

PaginationLinkPrev.propTypes = propTypes;
PaginationLinkPrev.defaultProps = defaultProps;

export default PaginationLinkPrev;