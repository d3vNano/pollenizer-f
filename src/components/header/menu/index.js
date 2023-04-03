import * as s from "./style";

export default function MenuHeader({ categories, onSelect }) {
    return (
        <s.Container>
            {categories.map((category) => (
                <s.Button key={category.id} onClick={() => onSelect(category)}>
                    {category.label}
                </s.Button>
            ))}
        </s.Container>
    );
}
