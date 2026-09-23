from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "bantay-gubat-petition-letter.pdf"
LOGO = ROOT / "src" / "assets" / "logo" / "bantay-gubat.png"

TEAL = colors.HexColor("#087F5B")
DEEP_TEAL = colors.HexColor("#075F49")
PALE_GREEN = colors.HexColor("#EFFAF4")
MINT = colors.HexColor("#D9F1E4")
TEXT = colors.HexColor("#263B33")
MUTED = colors.HexColor("#61736B")
LINE = colors.HexColor("#B9D7C7")

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
TOP = 18 * mm
BOTTOM = 17 * mm


def draw_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(TEAL)
    canvas.rect(0, PAGE_H - 9 * mm, PAGE_W, 9 * mm, stroke=0, fill=1)
    canvas.setStrokeColor(LINE)
    canvas.line(MARGIN_X, 13 * mm, PAGE_W - MARGIN_X, 13 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(MARGIN_X, 8.5 * mm, "Bantay Gubat - Educational Forest Advocacy Project")
    canvas.drawRightString(PAGE_W - MARGIN_X, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Brand",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=18,
    leading=21,
    textColor=TEAL,
    spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="Tagline",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="PetitionTitle",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=20,
    leading=24,
    alignment=TA_CENTER,
    textColor=DEEP_TEAL,
    spaceAfter=6,
))
styles.add(ParagraphStyle(
    name="Subtitle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9.5,
    leading=13,
    alignment=TA_CENTER,
    textColor=MUTED,
    spaceAfter=12,
))
styles.add(ParagraphStyle(
    name="Section",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=14,
    textColor=TEAL,
    spaceBefore=8,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="BodySmall",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=8.8,
    leading=13.2,
    textColor=TEXT,
    alignment=TA_LEFT,
    spaceAfter=7,
))
styles.add(ParagraphStyle(
    name="Action",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=8.3,
    leading=11.8,
    textColor=TEXT,
))
styles.add(ParagraphStyle(
    name="FieldLabel",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    textColor=DEEP_TEAL,
))
styles.add(ParagraphStyle(
    name="FinePrint",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.4,
    leading=10.5,
    textColor=MUTED,
))


def brand_header():
    logo = Image(str(LOGO), width=22 * mm, height=22 * mm)
    copy = [
        Paragraph("Bantay Gubat", styles["Brand"]),
        Paragraph("Evidence, awareness, and action for Philippine forests.", styles["Tagline"]),
    ]
    table = Table([[logo, copy]], colWidths=[28 * mm, 130 * mm])
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return table


def action_row(number, text):
    number_cell = Table(
        [[Paragraph(str(number), ParagraphStyle(
            "Number", fontName="Helvetica-Bold", fontSize=9, leading=12,
            alignment=TA_CENTER, textColor=colors.white,
        ))]],
        colWidths=[8 * mm],
        rowHeights=[8 * mm],
    )
    number_cell.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), TEAL),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOX", (0, 0), (-1, -1), 0.5, TEAL),
    ]))
    row = Table([[number_cell, Paragraph(text, styles["Action"])]], colWidths=[11 * mm, 145 * mm])
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
    ]))
    return row


def field_box(label, height=13 * mm):
    box = Table([
        [Paragraph(label, styles["FieldLabel"])],
        [""],
    ], colWidths=[156 * mm], rowHeights=[6 * mm, height])
    box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PALE_GREEN),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("LINEBELOW", (0, 0), (-1, 0), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, 0), 7),
        ("VALIGN", (0, 0), (-1, 0), "MIDDLE"),
    ]))
    return box


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=TOP,
        bottomMargin=BOTTOM,
        title="Bantay Gubat Petition Letter",
        author="Bantay Gubat",
        subject="Petition for stronger protection of Philippine forests",
    )
    frame = Frame(MARGIN_X, BOTTOM, PAGE_W - 2 * MARGIN_X, PAGE_H - TOP - BOTTOM, id="main")
    doc.addPageTemplates([PageTemplate(id="petition", frames=[frame], onPage=draw_page)])

    story = [brand_header(), Spacer(1, 8 * mm)]
    story.extend([
        Paragraph("Petition for Stronger Protection of Philippine Forests", styles["PetitionTitle"]),
        Paragraph("Addressed to the Department of Environment and Natural Resources, local government units, and concerned forest-protection authorities", styles["Subtitle"]),
    ])

    callout = Table([[Paragraph(
        "We respectfully call for continued and strengthened action against illegal logging and the unauthorized removal and transportation of forest products in the Philippines.",
        ParagraphStyle("Callout", parent=styles["BodySmall"], fontName="Helvetica-Bold", fontSize=9.2, leading=13.5, textColor=DEEP_TEAL, spaceAfter=0),
    )]], colWidths=[156 * mm])
    callout.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE_GREEN),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("LINEBEFORE", (0, 0), (0, 0), 4, TEAL),
        ("LEFTPADDING", (0, 0), (-1, -1), 11),
        ("RIGHTPADDING", (0, 0), (-1, -1), 11),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    story.extend([callout, Spacer(1, 5 * mm)])

    story.extend([
        Paragraph("Why this petition matters", styles["Section"]),
        Paragraph(
            "Philippine forests provide wildlife habitat, protect soil and watersheds, regulate water, store carbon, and support communities that depend on forest resources. Documented cases in Palawan, Caraga, and other regions demonstrate that unauthorized tree cutting and forest-product transportation remain continuing concerns.",
            styles["BodySmall"],
        ),
        Paragraph("We respectfully request that concerned authorities:", styles["Section"]),
    ])

    actions = [
        "Strengthen forest monitoring, patrols, and enforcement in identified high-risk areas.",
        "Investigate reported illegal cutting while observing due process and relying on verified evidence.",
        "Improve coordination among DENR offices, law-enforcement agencies, local governments, and forest communities.",
        "Protect Indigenous peoples and communities whose resources and culturally important places depend on healthy forests.",
        "Publish clear and accurate information about enforcement actions, confiscated forest products, and forest-restoration efforts.",
        "Support sustainable livelihoods, environmental education, community reporting, and forest rehabilitation.",
    ]
    story.extend(action_row(i, action) for i, action in enumerate(actions, 1))
    story.extend([
        Spacer(1, 4 * mm),
        Paragraph(
            "This petition supports lawful, evidence-based, and community-centered forest protection. It does not assign responsibility for any individual incident without verified evidence and due process.",
            styles["FinePrint"],
        ),
        PageBreak(),
        brand_header(),
        Spacer(1, 5 * mm),
        Paragraph("Supporter Declaration", styles["PetitionTitle"]),
        Paragraph("Complete the information below to add your support to the petition.", styles["Subtitle"]),
    ])

    declaration = Table([[Paragraph(
        "I support the protection of Philippine forests against illegal logging. I understand that Bantay Gubat is an educational advocacy project and that my information and electronic signature will be used to document my petition support.",
        styles["BodySmall"],
    )]], colWidths=[156 * mm])
    declaration.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), MINT),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.extend([declaration, Spacer(1, 5 * mm)])

    name_table = Table([
        [Paragraph("SURNAME", styles["FieldLabel"]), Paragraph("FIRST NAME", styles["FieldLabel"]), Paragraph("MIDDLE NAME", styles["FieldLabel"])],
        ["", "", ""],
    ], colWidths=[52 * mm, 52 * mm, 52 * mm], rowHeights=[6 * mm, 11 * mm])
    name_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PALE_GREEN),
        ("GRID", (0, 0), (-1, -1), 0.7, LINE),
        ("LEFTPADDING", (0, 0), (-1, 0), 6),
        ("VALIGN", (0, 0), (-1, 0), "MIDDLE"),
    ]))
    story.extend([
        name_table,
        Spacer(1, 3.5 * mm),
        field_box("EMAIL ADDRESS", 10 * mm),
        Spacer(1, 3.5 * mm),
        field_box("COMPLETE ADDRESS", 13 * mm),
        Spacer(1, 3.5 * mm),
        field_box("REASON FOR SUPPORTING FOREST PROTECTION", 27 * mm),
        Spacer(1, 3.5 * mm),
    ])

    signature_table = Table([
        [Paragraph("ELECTRONIC OR HANDWRITTEN SIGNATURE", styles["FieldLabel"]), Paragraph("DATE", styles["FieldLabel"])],
        ["", ""],
    ], colWidths=[112 * mm, 44 * mm], rowHeights=[6 * mm, 25 * mm])
    signature_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PALE_GREEN),
        ("GRID", (0, 0), (-1, -1), 0.7, LINE),
        ("LEFTPADDING", (0, 0), (-1, 0), 6),
        ("VALIGN", (0, 0), (-1, 0), "MIDDLE"),
    ]))
    story.extend([
        signature_table,
        Spacer(1, 5 * mm),
        KeepTogether([
            Paragraph("Privacy notice", styles["Section"]),
            Paragraph(
                "Petition information and signatures should be stored in Bantay Gubat's private Google Drive folder and accessed only for legitimate petition administration. Personal information should not be published or shared without the signer's consent, except when required by law.",
                styles["FinePrint"],
            ),
        ]),
    ])

    doc.build(story)
    return OUTPUT


if __name__ == "__main__":
    print(build_pdf())
