const { getAsObject } = require('@base-cms/object-path');
const { asObject } = require('@base-cms/utils');

const contentContext = (content) => {
  const company = getAsObject(content, 'company');
  const createdBy = getAsObject(content, 'createdBy');
  const section = getAsObject(content, 'primarySection');
  const channel = getAsObject(section, 'hierarchy.0');
  return {
    page_type: 'content',
    canonical_path: content.canonicalPath,
    content_id: content.id,
    content_type: content.type,
    content_title: content.name,
    published_date: content.published ? new Date(content.published).toISOString() : undefined,
    created_by_id: createdBy.id,
    created_by_username: createdBy.username,
    company_id: company.id,
    company_name: company.name,
    section_id: section.id,
    section_name: section.name,
    section_path: section.fullName,
    root_section_id: channel.id,
    root_section_name: channel.name,
  };
};

const websiteSectionContext = (section) => {
  const channel = getAsObject(section, 'hierarchy.0');
  return {
    page_type: 'website-section',
    canonical_path: section.canonicalPath,
    section_id: section.id,
    section_name: section.name,
    section_path: section.fullName,
    root_section_id: channel.id,
    root_section_name: channel.name,
  };
};

const dynamicPageContext = page => ({
  page_type: 'dynamic-page',
  canonical_path: page.canonicalPath,
});

module.exports = (type, obj) => {
  const o = asObject(obj);
  switch (type) {
    case 'content':
      return contentContext(o);
    case 'website-section':
      return websiteSectionContext(o);
    case 'dynamic-page':
      return dynamicPageContext(o);
    default:
      return {
        page_type: type,
        canonical_path: o.canonicalPath,
      };
  }
};
