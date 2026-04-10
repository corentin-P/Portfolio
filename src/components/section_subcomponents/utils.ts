let text_sections = ['experience', 'logos-list', 'logos-description', 'projects', 'section']

export function is_text_section(section: string) {
    return text_sections.includes(section)
}