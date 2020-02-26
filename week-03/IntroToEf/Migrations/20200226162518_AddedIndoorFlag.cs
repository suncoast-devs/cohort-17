using Microsoft.EntityFrameworkCore.Migrations;

namespace IntroToEf.Migrations
{
    public partial class AddedIndoorFlag : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsIndoor",
                table: "Cats",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsIndoor",
                table: "Cats");
        }
    }
}
